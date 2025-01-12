import fs from "node:fs";
import { resolve } from "node:path";
import process from "node:process";

import logger from "consola";
import glob from "fast-glob";
import matter from "gray-matter";

import prettier from "prettier";
import { z } from "zod";

/**
 * METADATA_SCHEMA defines the structure for metadata validation.
 *
 * This schema requires a metadata object to have the following properties:
 * - title: A string representing the title.
 * - description: A string providing a description.
 * - tags: An array of strings representing associated tags.
 */
const METADATA_SCHEMA = z.object({
  title: z.string(),
  description: z.string(),
  tags: z.array(z.string()),
  createdAt: z.date().optional(),
});

/**
 * Represents the file path pattern used to match content files.
 * The pattern is used to locate .mdx files under the "content" directory
 * and its subdirectories.
 *
 * The double asterisk '**' allows recursive traversal into all subdirectories,
 * while the '*.mdx' indicates that only files with the '.mdx' extension are matched.
 *
 * Example use cases include file system operations for reading, parsing, or bundling
 * markdown files with JSX syntax in a defined folder structure.
 */
const CONTENT_GLOB = "content/**/*.mdx";

/**
 * Default file encoding for reading files.
 */
const FILE_ENCODING = "utf-8";

/**
 * A function that validates input data against a given schema using the `safeParse` method.
 *
 * If the validation succeeds, the parsed data is returned. If the validation fails, an error
 * is thrown with the validation error message.
 *
 * @param {import('zod').ZodObject} schema - The schema object used to validate the input data.
 * @param {object} data - The input data to be validated against the schema.
 * @returns {object} - The parsed data if validation succeeds.
 *
 * @throws {Error} - Throws an error with the validation error message if the validation fails.
 */
export function validate(schema, data) {
  const result = schema.safeParse(data);
  if (result.success) {
    return result.data;
  }
  throw new Error(result.error.message);
}

/**
 * Converts a relative file path to an absolute file path.
 *
 * This function takes a relative path as input and resolves it to an
 * absolute path based on the current working directory of the Node.js process.
 *
 * @param {string} path - The relative file or directory path to be resolved.
 * @returns {string} The absolute file or directory path.
 */
export const toAbsolute = (path) => resolve(process.cwd(), path);

/**
 * Checks if a file or directory exists at the specified path.
 *
 * @param {string} path - The path to the file or directory to check.
 * @returns {boolean} True if the file or directory exists, otherwise false.
 */
export const fileExists = (path) => fs.existsSync(path);

/**
 * Checks whether a directory exists at the specified path.
 *
 * This function verifies the existence of a directory by checking
 * if the provided path corresponds to a valid directory in the file system.
 *
 * @param {string} path - The file system path to check.
 * @returns {boolean} - Returns true if the path exists and is a directory, otherwise false.
 */
export function directoryExist(path) {
  return fs.existsSync(path) && fs.lstatSync(path).isDirectory();
}

/**
 * Writes the specified content to a file at the given path.
 * Logs the process of writing the file.
 *
 * @param {string} path - The file path where the content will be written.
 * @param {string} content - The content to write into the file.
 */
export function writeToFile(path, content) {
  logger.start("Writing file", path.split("/").pop());
  fs.writeFileSync(path, content);
  logger.success("File written successfully");
}

/**
 * Asynchronously updates the content of a file at the specified path.
 *
 * This function logs the operation's initiation, including the file name being updated,
 * and writes the provided content to the specified file path.
 *
 * The function relies on the `writeToFile` utility to perform the actual file writing operation.
 *
 * @param {string} path - The file path where the content should be updated.
 * @param {string} content - The new content to be written to the file.
 *
 * @returns {Promise<void>} A promise that resolves when the file has been successfully updated.
 */
export async function updateFile(path, content) {
  return writeToFile(path, content);
}

/**
 * Asynchronously creates a file with the specified content at the given path.
 *
 * If the file does not exist, it is created. If the file already exists,
 * prompts the user for confirmation to overwrite the file. If confirmed,
 * the file is overwritten with the new content.
 *
 * @async
 * @function
 * @param {string} path - The file path where the new file should be created.
 * @param {string} content - The content to write into the file.
 * @returns {Promise<void>} A promise that resolves when the file is successfully created or overwritten.
 *
 * @throws {Error} If an error occurs while writing to the file.
 */
export async function createFile(path, content) {
  if (!fileExists(path)) {
    logger.info("File does not exist, creating...");
    return writeToFile(path, content);
  }

  const overwrite = await logger.prompt("File already exists, overwrite?", {
    type: "confirm",
    initial: false,
  });

  if (overwrite) {
    logger.info("Overwriting file...");
    return writeToFile(path, content);
  }
}

/**
 * Reads and validates metadata from a specified content file.
 *
 * This function reads the content file associated with the given `slug` and `locale`,
 * extracts metadata using a frontmatter parser, and validates the extracted metadata
 * against a predefined schema.
 *
 * @function
 * @param {string} slug - The identifier for the content directory containing the file.
 * @param {string} locale - The locale string corresponding to the metadata file to be read.
 * @returns {object} The validated metadata object extracted from the content file.
 *
 * @throws {Error} Will throw an error if the content file cannot be read, if metadata extraction fails,
 * or if the metadata does not conform to the expected schema.
 */
function readAndValidateMetadata(slug, locale) {
  const content = fs.readFileSync(
    toAbsolute(`content/${slug}/${locale}.mdx`),
    FILE_ENCODING,
  );
  const stat = fs.statSync(toAbsolute(`content/${slug}/${locale}.mdx`));
  const metadata = matter(content).data;
  return validate(METADATA_SCHEMA, { ...metadata, createdAt: stat.birthtime });
}

/**
 * Asynchronously collects and processes metadata from content files.
 *
 * This function scans content files matching a predefined glob pattern,
 * extracts metadata for each file, organizes it by slug and locale,
 * and returns an array of entries where each entry represents a slug
 * and its associated locale-specific metadata.
 *
 * @async
 * @function
 *
 * @returns {Promise<Array>} A promise that resolves to an array of entries.
 * Each entry is a key-value pair where the key is a slug (string) and the
 * value is an object containing locale-specific metadata.
 */
export async function collectContentMetadata() {
  const metadataMap = new Map();
  const files = await glob.async(CONTENT_GLOB);

  files.forEach((file) => {
    const [slug, locale] = file
      .replace("content/", "")
      .replace(".mdx", "")
      .split("/");

    const localeMetadata = readAndValidateMetadata(slug, locale);

    if (!metadataMap.has(slug)) {
      metadataMap.set(slug, { [locale]: localeMetadata });
    } else {
      const existingMetadata = metadataMap.get(slug);
      metadataMap.set(slug, { ...existingMetadata, [locale]: localeMetadata });
    }
  });

  return Array.from(metadataMap.entries());
}

/**
 * Prettifies the given code string using Prettier.
 *
 * This function takes an input code string, resolves the Prettier configuration
 * automatically from the current working directory, and formats the code accordingly.
 *
 * @param {string} code - The code string to prettify.
 * @param {import('prettier').Options} prettierOptions - Prettier options with an optional parser.
 * @returns {Promise<string>} A promise that resolves to the formatted code.
 *
 * @throws {Error} If an error occurs during formatting or configuration resolution.
 */
export async function prettify(
  code,
  prettierOptions = { parser: "typescript" },
) {
  try {
    const config = (await prettier.resolveConfig(process.cwd())) || {};
    return prettier.format(code, {
      ...config,
      ...prettierOptions,
    });
  } catch (error) {
    throw new Error(`Error prettifying code: ${error.message} (Prettier)`);
  }
}

/**
 * Dynamically generates a TypeScript stub file by replacing placeholders with metadata content.
 *
 * This function reads the stub file specified at `stubPath` and replaces
 * the placeholder `{{ METADATA }}` with the provided `metadataContent`.
 *
 * @async
 * @function
 * @param {string} stubPath - The path to the stub file that will be read.
 * @param {string} metadataContent - The metadata content to inject into the stub file.
 * @returns {Promise<string>} The modified content of the stub file with replaced metadata.
 *
 * @throws {Error} If the stub file does not exist at the provided path.
 */
export async function generateStubContent(stubPath, metadataContent) {
  if (!fileExists(stubPath)) {
    throw new Error("Stub file does not exist");
  }

  // Read file content and replace metadata placeholder
  const stubContent = fs
    .readFileSync(stubPath, FILE_ENCODING)
    .replace("{{ METADATA }}", metadataContent);

  // Prettify the resulting content
  return await prettify(stubContent);
}

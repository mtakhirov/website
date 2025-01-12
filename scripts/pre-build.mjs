import logger from "consola";
import {
  collectContentMetadata,
  generateStubContent,
  toAbsolute,
  updateFile,
} from "./helpers.mjs";

/**
 * A collection of constant values used throughout the application.
 *
 * @constant
 * @type {object}
 */
const constants = {
  STUB_FILE: toAbsolute("scripts/stubs/metadata.stub"),
  METADATA_FILE: toAbsolute("content/metadata.ts"),
  JSON_STRINGIFY_OPTIONS: { replacer: null, space: 2 },
};

/**
 * Asynchronously generates the content of a file by collecting metadata
 * and creating stub content based on the collected data.
 *
 * @return {Promise<string>} A promise that resolves to the generated file content as a string.
 */
async function generateFileContent() {
  const metadata = await collectContentMetadata();
  const metadataContent = JSON.stringify(
    metadata,
    constants.JSON_STRINGIFY_OPTIONS.replacer,
    constants.JSON_STRINGIFY_OPTIONS.space,
  );
  return await generateStubContent(constants.STUB_FILE, metadataContent);
}

/**
 * Asynchronously generates and writes metadata content to a specified metadata file.
 *
 * @return {Promise<void>} A promise that resolves when the metadata file is successfully written.
 */
async function writeMetadataFile() {
  const fileContent = await generateFileContent();
  await updateFile(constants.METADATA_FILE, fileContent);
}

/**
 * Main function that executes the pre-build script.
 * Handles writing metadata to a file and logs the process outcome.
 *
 * @return {Promise<void>} A promise that resolves when the script completes successfully or rejects with an error.
 */
async function main() {
  try {
    await writeMetadataFile();
    logger.success("Pre-build script completed successfully.");
  }
  catch (error) {
    logger.error("Failed to run pre-build script", error);
  }
}

main().then();

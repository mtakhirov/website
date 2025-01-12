import type { locales } from "#features/i18n";

export type StringableMetadata = "title" | "description";
export type ArrayableMetadata = "tags";

export type $Locales = typeof locales;
export type AvailableLocales = $Locales[number];

export type Slug = string;
export type MetadataData = Record<StringableMetadata, string> &
  Record<ArrayableMetadata, string[]> & {
    createdAt: string;
  };

// Exportable types
export type PostMetadataProps = Record<AvailableLocales, MetadataData>;
export type PostMetadata = Array<[Slug, Partial<PostMetadataProps>]>;

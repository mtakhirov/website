import Locales from "#locales/uz.json";
import { locales as availableLocales } from "#features/i18n";

type Messages = typeof Locales;

type $AvailableLocales = typeof availableLocales;
type AvailableLocales = $AvailableLocales[number];

declare global {
  type IntlMessages = Messages;
}

declare module "#content/metadata.json" {
  type Slug = string;

  interface MetadataProps {
    title: string;
    description: string;
    tags: string[];
  }

  type Metadata = Partial<Record<AvailableLocales, MetadataProps>>;

  declare const value: Array<[Slug, Metadata]>;

  export default value;
}

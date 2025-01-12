import type { locales as availableLocales } from "#features/i18n";
import type Locales from "#locales/uz.json";

type Messages = typeof Locales;

type $AvailableLocales = typeof availableLocales;
type AvailableLocales = $AvailableLocales[number];

declare global {
  type IntlMessages = Messages;
}

import Locales from "./locales/uz.json";

type Messages = typeof Locales;

declare global {
  type IntlMessages = Messages;
}

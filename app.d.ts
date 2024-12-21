import Locales from "./locales/uz.json";

type Messages = typeof Locales;

declare global {
  interface IntlMessages extends Messages {}
}

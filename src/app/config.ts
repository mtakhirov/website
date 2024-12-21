import type { Metadata, Viewport } from "next";

export const APP_NAME = "Takhirov's Diary";

export const metadata: Metadata = {
  title: {
    default: APP_NAME,
    template: `%s </> ${APP_NAME}`,
  },

  description: "Some description content",
  creator: "Mukhammaddiyor Takhirov <mtohirov60@gmail.com>",
};

export const viewport: Viewport = {
  colorScheme: "dark light",
  themeColor: "#000000",

  initialScale: 1,
  userScalable: false,
  width: "device-width",
};

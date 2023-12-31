import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";
import { ColorSchemeScript, MantineProvider } from "@mantine/core";
import { theme } from "@/mantine/theme";

const popppins = Poppins({
  subsets: ["latin"],
  weight: ["200", "400", "500", "700", "900"],
  style: ["italic", "normal"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Experiencias Club",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body className={popppins.className}>
        <MantineProvider theme={theme} forceColorScheme="light">
          <main className="font-normal flex flex-col justify-between min-h-screen ">
            {children}
          </main>
        </MantineProvider>
      </body>
    </html>
  );
}

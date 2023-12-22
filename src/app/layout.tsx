import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import "@mantine/core/styles.css";
import { ColorSchemeScript, MantineProvider } from "@mantine/core";
import { Header } from "@/components/layout/header/Header";
import { Footer } from "@/components/layout/Footer";
import { theme } from "@/mantine/theme";

const popppins = Poppins({
  subsets: ["latin"],
  weight: ["200", "400", "500", "700", "900"],
  style: ["italic", "normal"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "EXP Club",
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
            <Header />
            <div className="px-5">{children}</div>
            <Footer />
          </main>
        </MantineProvider>
      </body>
    </html>
  );
}

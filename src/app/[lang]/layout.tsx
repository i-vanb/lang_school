import type { Metadata } from "next";

import { Inter, Roboto } from "next/font/google";


import "./globals.css";
import { Locale, i18n } from "@/i18n.config";
import {Providers} from "@/app/providers";
import {Header} from "@/app/layouts/Header";
import {Footer} from "@/app/layouts/Footer";

const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({weight: ['400','700'], subsets: ["latin"]});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export async function generateStaticParams() {
  return i18n.locales.map(locale => ({ lang: locale }))
}

export default function RootLayout({
  children, params
}: Readonly<{
  children: React.ReactNode;
  params: { lang: Locale };
}>) {
  return (
    <html lang={params.lang} suppressHydrationWarning >
      <body className={roboto.className}>
      <div className="flex flex-col min-h-screen">
      {/*<div className="min-h-screen">*/}
        <Providers>
          <Header lang={params.lang} />
          <div className="flex-1">
            {children}
          </div>
          <Footer lang={params.lang} />
        </Providers>
      </div>
      </body>
    </html>
  );
}

import type { Metadata } from "next";

import { Golos_Text, Kanit } from 'next/font/google';
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";

import { routing } from "@/i18n/routing";

import "../globals.css";
import Header from "@/components/layout/front/header/Header";

const golosText = Golos_Text({
  variable: "--font-golos-text",
  subsets: ["latin"],
});

const kanit = Kanit({
  variable: "--font-kanit",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "MIdS CMU",
  description: "Multidisciplinary and Interdisciplinary School",
};

type Props = {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
};
 

export default async function RootLayout({ children, params}: Props) {
  const {locale} = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body
        className={`${golosText.variable} ${kanit.variable} antialiased`}>
        <NextIntlClientProvider>
          <Header />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
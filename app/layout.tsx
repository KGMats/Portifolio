import type { Metadata } from "next";
import { Geist, Geist_Mono, Source_Code_Pro } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import 'devicon/devicon.min.css';
import Footer from "./components/footer";
import { LanguageProvider } from "./context/LanguageContext";
import {Suspense} from "react";

export const metadata: Metadata = {
  metadataBase: new URL('https://kgmats.cc'),
  title: {
    default: 'KGMats | Backend Developer Portfolio',
    template: '%s | KGMats'
  },
  description: 'Portfolio of Kayky Gibran (KGMats). Backend developer specializing in reverse engineering, high-performance computing and systems programming.',
  keywords: ['C', 'PHP', 'Python', 'Docker', 'Backend Developer', 'Reverse Engineering', 'KGMats', 'Kayky Gibran'],
  authors: [{ name: 'KGMats' }],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://kgmats.cc',
    title: 'KGMats | Developer Portfolio',
    description: 'Backend developer with experience in reverse engineering, systems programming and high-performance computing.',
    siteName: 'KGMats Portfolio',
    images: ['/og-image.png']
  },
  twitter: {
    card: 'summary_large_image',
    title: 'KGMats | Developer Portfolio',
    description: 'Backend developer with experience in reverse engineering, systems programming and high-performance computing.',
    images: ['/og-image.png'],
  },
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
};

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });
const sourceCode = Source_Code_Pro({ variable: "--font-source-code", subsets: ["latin"] });
const hack = localFont({
  src: [
    { path: './fonts/Hack/Hack-Regular.ttf', weight: '400', style: 'normal' },
    { path: './fonts/Hack/Hack-Bold.ttf', weight: '700', style: 'normal' },
    { path: './fonts/Hack/Hack-Italic.ttf', weight: '400', style: 'italic' },
    { path: './fonts/Hack/Hack-BoldItalic.ttf', weight: '700', style: 'italic' },
  ],
  variable: '--font-hack',
  display: 'swap',
});

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="pt-BR" suppressHydrationWarning>
        <head>
        </head>
        <body className={`${geistSans.variable} ${geistMono.variable} ${hack.variable} ${sourceCode.variable}`}>
          <script dangerouslySetInnerHTML={{ __html: `
            (function() {
              try {
                var params = new URLSearchParams(window.location.search);
                var lang = params.get('lang');
                if (!lang) lang = localStorage.getItem('lang');
                if (!lang) lang = navigator.language.startsWith('pt') ? 'pt' : 'en';
                if (lang !== 'pt' && lang !== 'en') lang = 'en';
                document.documentElement.setAttribute('data-lang', lang);
              } catch(e) {}
            })();
          `}} />
            <Suspense>
                <LanguageProvider>
                    {children}
                    <Footer />
                </LanguageProvider>
            </Suspense>
            </body>
        </html>
    );
}

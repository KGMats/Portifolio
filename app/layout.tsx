import type { Metadata } from "next";
import { Geist, Geist_Mono, Source_Code_Pro } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import 'devicon/devicon.min.css';
import Footer from "./components/footer";


export const metadata: Metadata = {
  metadataBase: new URL('https://kgmats.cc'),
  
  title: {
    default: 'KGMats | Graphics & Systems Programming Portfolio',
    template: '%s | KGMats'
  },
  
  description: 'Portfolio of KGMats. Backend developer and Systems Engineer specializing in low-level programming and high-performance computing.',
  
  keywords: ['C++', 'Software Developer', 'Graphics Programming', 'OpenGL', 'Python', 'KGMats', 'Systems Programming', 'Gibran', 'Kayky Gibran'],
  
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
    locale: 'en_US',
    url: 'https://kgmats.cc',
    title: 'KGMats | Developer Portfolio',
    description: 'Backend developer and Systems Engineer with experience in Low-level programming, IoT and Web development projects.',
    siteName: 'KGMats Portfolio',
    images: ['/og-image.png']
  },

  twitter: {
    card: 'summary_large_image',
    title: 'KGMats | Developer Portfolio',
    description: 'Backend developer and Systems Engineer with experience in Low-level programming, IoT and Web development projects.',
    images: ['/og-image.png'],
  },
  
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
}



// Fontes
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});


const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


const sourceCode = Source_Code_Pro({
    variable: "--font-source-code",
    subsets: ["latin"]
});

const hack = localFont({
  src: [
    {
      path: './fonts/Hack/Hack-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/Hack/Hack-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: './fonts/Hack/Hack-Italic.ttf',
      weight: '400',
      style: 'italic',
    },
    {
      path: './fonts/Hack/Hack-BoldItalic.ttf',
      weight: '700',
      style: 'italic',
    },
  ],
  variable: '--font-hack', // Defines the CSS variable
  display: 'swap',
});



// Layout geral
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${hack.variable} ${sourceCode.variable}`}
      >
        {children}
      <Footer></Footer>
      </body>
    </html>
  );
}

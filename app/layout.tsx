import type { Metadata } from 'next';
import './globals.css';
import CookieBanner from '@/components/CookieBanner';

export const metadata: Metadata = {
  title: 'Instagram Video Downloader - Download Videos by Link | GetDownload',
  description:
    'Download Instagram videos and reels in high quality. Fast, secure, and easy to use.',
  keywords: [
    'instagram downloader',
    'instagram video downloader',
    'download instagram reels',
    'save instagram videos',
    'instagram video saver',
    'instagram video downloader by link'
  ],
  authors: [{ name: 'GetDownload' }],

  // ✅ CANONICAL URL (CRITICAL)
  alternates: {
    canonical: 'https://getdownload.site',
  },

  // ✅ GOOGLE SEARCH CONSOLE VERIFICATION
  verification: {
    google: 'se2QcF-_clXUOh_k_IGlDUqaqPtJcvpaqO-4hVeJegc',
  },
   icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

 openGraph: {
  title: 'Instagram Video Downloader - Fast & Reliable',
  description:
    'Download Instagram videos and reels in high quality. Fast, secure, and easy to use.',
  url: 'https://getdownload.site',
  siteName: 'GetDownload',
  type: 'website',
  images: [
    {
      url: 'https://getdownload.site/og-image.png',
      width: 1200,
      height: 630,
      alt: 'Instagram Video Downloader',
    },
  ],
},


  twitter: {
  card: 'summary_large_image',
  title: 'Instagram Video Downloader - Fast & Reliable',
  description:
    'Download Instagram videos and reels in high quality.',
  images: ['https://getdownload.site/og-image.png'],
},

  robots: {
    index: true,
    follow: true,
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'GetDownload',
    description:
      'Download Instagram videos and reels in high quality. Fast, secure, and easy to use.',
    applicationCategory: 'MultimediaApplication',
    operatingSystem: 'All',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    featureList: [
      'Fast video processing',
      'High quality downloads',
      'Secure and private',
      'Cross-platform support',
    ],
    url: 'https://getdownload.site',
  };

  return (
    <html lang="en">
      <head>
        {/* ✅ Structured Data for Google */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}

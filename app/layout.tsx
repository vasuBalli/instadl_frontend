import type { Metadata } from 'next';
import './globals.css';
import CookieBanner from '@/components/CookieBanner';

export const metadata: Metadata = {
  title: 'Instagram Video Downloader - Fast & Reliable | InstagramDownloader',
  description:
    'Download Instagram videos and reels in high quality. Fast, secure, and easy to use.',
  keywords: [
    'instagram downloader',
    'instagram video downloader',
    'download instagram reels',
    'save instagram videos',
    'instagram video saver',
  ],
  authors: [{ name: 'InstagramDownloader' }],
  openGraph: {
    title: 'Instagram Video Downloader - Fast & Reliable',
    description:
      'Download Instagram videos and reels in high quality. Fast, secure, and easy to use.',
    type: 'website',
    siteName: 'InstagramDownloader',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Instagram Video Downloader - Fast & Reliable',
    description:
      'Download Instagram videos and reels in high quality. Fast, secure, and easy to use.',
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
    name: 'InstagramDownloader',
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
  };

  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="PASTE_YOUR_VERIFICATION_CODE_HERE"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}
        <CookieBanner />
      </body>
    </html>
  );
}

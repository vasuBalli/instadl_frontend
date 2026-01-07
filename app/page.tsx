import { Video } from 'lucide-react';
// import { VideoDownloader } from '@/components/VideoDownloader';
import VideoDownloader from '@/components/VideoDownloader';
import { Features } from '@/components/Features';
import { HowItWorks } from '@/components/HowItWorks';

export default function Home() {
 
  return (
    <div className="min-h-screen bg-gray-950">
      {/* Header */}
      <header className="border-b border-gray-800/50 bg-gray-950/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-blue-600 flex items-center justify-center">
              <Video className="w-5 h-5 text-white" />
            </div>
            <span className="text-white tracking-tight">InstagramDownloader</span>
          </div>
          <nav className="hidden md:flex gap-8 items-center">
            <a href="#features" className="text-gray-400 hover:text-white transition-colors text-sm">Features</a>
            <a href="#how-it-works" className="text-gray-400 hover:text-white transition-colors text-sm">How It Works</a>
            <button className="px-4 py-2 bg-blue-600 text-white text-sm hover:bg-blue-700 transition-colors">
              Get Started
            </button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-24 md:py-32">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-6xl text-white mb-6 tracking-tight">
            Download Instagram Videos
            <br />
            <span className="text-gray-400">Fast and Reliable</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Professional Instagram video downloader. Save videos and reels in high quality with just a few clicks.
          </p>
        </div>

        <VideoDownloader />
      </section>

      {/* Features */}
      <Features />

      {/* How It Works */}
      <HowItWorks />

      {/* Footer */}
      <footer className="border-t border-gray-800/50 bg-gray-950 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-blue-600 flex items-center justify-center">
                  <Video className="w-4 h-4 text-white" />
                </div>
                <span className="text-white tracking-tight">InstagramDownloader</span>
              </div>
              <p className="text-gray-400 text-sm max-w-md">
                The most reliable Instagram video downloader. Fast, secure, and easy to use for all your downloading needs.
              </p>
            </div>
            <div>
              <h3 className="text-white text-sm mb-4">Product</h3>
              <ul className="space-y-3 text-sm">
                <li><a href="#features" className="text-gray-400 hover:text-white transition-colors">Features</a></li>
                <li><a href="#how-it-works" className="text-gray-400 hover:text-white transition-colors">How It Works</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Pricing</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white text-sm mb-4">Legal</h3>
              <ul className="space-y-3 text-sm">
                <li><a href="/privacy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="/terms" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="/dmca" className="text-gray-400 hover:text-white transition-colors">DMCA</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800/50 pt-8">
            <p className="text-gray-500 text-sm text-center">
              &copy; 2025 getdownload.site. All rights reserved. getdownload.site is not affiliated with Instagram or Meta Platforms, Inc.

            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

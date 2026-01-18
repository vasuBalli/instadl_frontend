'use client';

import { useState } from 'react';
import { Download, Loader2, AlertCircle, CheckCircle, Clock, User } from 'lucide-react';

type VideoData = {
  thumbnail: string;
  title: string;
  username: string;
  duration: string;
  download_url: string;
};

export default function VideoDownloader() {
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);        // fetch info loader
  const [downloading, setDownloading] = useState(false); // download loader
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [videoData, setVideoData] = useState<VideoData | null>(null);

  // ---------------- FETCH INFO ----------------
  const handleDownload = async (e: React.FormEvent) => {
    e.preventDefault();

    setError('');
    setSuccess(false);
    setVideoData(null);

    if (!url.trim()) {
      setError('Please enter an Instagram URL');
      return;
    }

    if (!url.includes('instagram.com')) {
      setError('Please enter a valid Instagram URL');
      return;
    }

    setLoading(true);

    try {
      const response = await fetch('https://www.getdownload.site/api/info/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url }),
      });

      const data = await response.json();
      console.log('INFO API DATA:', data);

      if (!response.ok) {
        throw new Error(data?.message || 'Server error');
      }

      if (!data.download_url) {
        throw new Error(data?.error || 'Video not available');
      }

      setVideoData({
        thumbnail: data.thumbnail || '',
        title: data.title || 'Instagram Video',
        username: data.username || 'Instagram',
        duration: data.duration || '--',
        download_url: data.download_url,
      });

      setSuccess(true);
    } catch (err: any) {
      setError(err.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  // ---------------- REAL DOWNLOAD ----------------
  const handleRealDownload = async () => {
    if (!videoData?.download_url || downloading) return;

    setDownloading(true);

    try {
      const response = await fetch(
        'https://www.getdownload.site' + videoData.download_url
      );

      if (!response.ok) {
        throw new Error('Download failed');
      }

      const blob = await response.blob();

      const blobUrl = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = blobUrl;
      a.download = videoData.title.replace(/[^a-z0-9]/gi, '_') + '.mp4';

      document.body.appendChild(a);
      a.click();

      a.remove();
      window.URL.revokeObjectURL(blobUrl);
    } catch (err) {
      console.error(err);
      alert('Download failed. Please try again.');
    } finally {
      setDownloading(false);
    }
  };

  // ---------------- UI ----------------
  return (
    <div className="max-w-4xl mx-auto">

      {/* Input Form */}
      <form onSubmit={handleDownload} className="bg-gray-900 border border-gray-800 p-8 mb-8">
        <div className="flex flex-col md:flex-row gap-4">
          <input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="Paste Instagram video URL here"
            className="flex-1 px-4 py-3 bg-gray-950 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-blue-600"
          />

          <button
            type="submit"
            disabled={loading}
            className="px-8 py-3 bg-blue-600 text-white hover:bg-blue-700 flex items-center gap-2 disabled:opacity-50"
          >
            {loading ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Processing
              </>
            ) : (
              <>
                <Download className="w-5 h-5" />
                Fetch Video
              </>
            )}
          </button>
        </div>

        {error && (
          <div className="mt-4 p-4 bg-red-950/50 border border-red-900/50 flex gap-3">
            <AlertCircle className="w-5 h-5 text-red-400 mt-0.5" />
            <p className="text-red-400 text-sm">{error}</p>
          </div>
        )}

        {success && (
  <div className="mt-6 p-4 bg-blue-950/50 border border-blue-900/50">
    <div className="flex flex-col items-center text-center gap-2">
      <CheckCircle className="w-6 h-6 text-blue-400" />
      <p className="text-blue-400 text-sm font-medium">
        Ready to download
      </p>
    </div>
  </div>
)}

      </form>

      {/* Preview + Download */}
      {videoData && (
        <div className="bg-gray-900 border border-gray-800 p-8">
          <div className="grid md:grid-cols-[280px,1fr] gap-8">
            <div>
              {videoData.thumbnail ? (
                <img
                  src={videoData.thumbnail}
                  alt="Thumbnail"
                  className="w-full aspect-[9/16] object-cover"
                />
              ) : (
                <div className="w-full aspect-[9/16] bg-gray-800 flex items-center justify-center text-gray-400">
                  No Preview
                </div>
              )}
            </div>

            <div className="flex flex-col justify-between">
              <div>
                <div className="flex gap-4 text-gray-400 text-sm mb-3">
                  <span className="flex items-center gap-1">
                    <User className="w-4 h-4" /> {videoData.username}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" /> {videoData.duration}
                  </span>
                </div>

                <h4 className="text-white mb-4">{videoData.title}</h4>
              </div>

              <button
                onClick={handleRealDownload}
                disabled={downloading}
                className="px-6 py-3 bg-blue-600 text-white hover:bg-blue-700 flex items-center justify-center gap-2 disabled:opacity-60"
              >
                {downloading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Downloading...
                  </>
                ) : (
                  <>
                    <Download className="w-5 h-5" />
                    Download Video
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

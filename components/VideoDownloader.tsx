'use client';

import { useState } from 'react';
import { Download, Loader2, AlertCircle, CheckCircle, Clock, User } from 'lucide-react';

export function VideoDownloader() {
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [videoData, setVideoData] = useState<{
    thumbnail: string;
    title: string;
    username: string;
    duration: string;
  } | null>(null);

  const handleDownload = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess(false);
    setVideoData(null);

    // Validate URL
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
  const response = await fetch(
    'https://getdownload.site/api/info/',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ url }),
    }
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.error || 'Failed to fetch video');
  }

  setVideoData({
    thumbnail: data.thumbnail,
    title: data.title,
    username: data.username,
    duration: data.duration,
    // download_url: data.download_url, // optional
  });

  setSuccess(true);
} catch (err: any) {
  setError(err.message);
} finally {
  setLoading(false);
}

  };

  const handleMockDownload = () => {
    // In real implementation, this would trigger actual download
    alert('In a production environment, this would download the video. This requires a backend service to fetch the video from Instagram.');
  };

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
            className="flex-1 px-4 py-3 bg-gray-950 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-blue-600 transition-colors"
          />
          <button
            type="submit"
            disabled={loading}
            className="px-8 py-3 bg-blue-600 text-white hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-blue-600"
          >
            {loading ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Processing
              </>
            ) : (
              <>
                <Download className="w-5 h-5" />
                Download
              </>
            )}
          </button>
        </div>

        {/* Error Message */}
        {error && (
          <div className="mt-4 p-4 bg-red-950/50 border border-red-900/50 flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
            <p className="text-red-400 text-sm">{error}</p>
          </div>
        )}

        {/* Success Message */}
        {success && (
          <div className="mt-4 p-4 bg-blue-950/50 border border-blue-900/50 flex items-start gap-3">
            <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
            <p className="text-blue-400 text-sm">Video found and ready to download</p>
          </div>
        )}
      </form>

      {/* Video Preview */}
      {videoData && (
        <div className="bg-gray-900 border border-gray-800 p-8 animate-fadeIn">
          <h3 className="text-white mb-6">Video Preview</h3>
          <div className="grid md:grid-cols-[280px,1fr] gap-8">
            <div>
              <img
                src={videoData.thumbnail}
                alt="Video thumbnail"
                className="w-full aspect-[9/16] object-cover"
              />
            </div>
            <div className="flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center gap-2 text-gray-400 text-sm">
                    <User className="w-4 h-4" />
                    <span>{videoData.username}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400 text-sm">
                    <Clock className="w-4 h-4" />
                    <span>{videoData.duration}</span>
                  </div>
                </div>
                <h4 className="text-white mb-3">{videoData.title}</h4>
                <p className="text-gray-400 text-sm">
                  This is a demonstration preview. In a production environment, actual video metadata and quality options would be displayed.
                </p>
              </div>
              <div className="grid sm:grid-cols-2 gap-3 mt-6">
                <button
                  onClick={handleMockDownload}
                  className="px-6 py-3 bg-blue-600 text-white hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
                >
                  <Download className="w-5 h-5" />
                  Download Video
                </button>
                <button
                  onClick={handleMockDownload}
                  className="px-6 py-3 border border-gray-700 text-gray-300 hover:border-gray-600 hover:bg-gray-800 transition-colors"
                >
                  Download Thumbnail
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

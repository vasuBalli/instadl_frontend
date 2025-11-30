import { useState } from 'react';
import { Download, Loader2, AlertCircle, CheckCircle } from 'lucide-react';

const API_BASE ="getdownload.site";
  // (import.meta.env.VITE_API_BASE_URL as string | undefined)?.replace(/\/$/, "") ||
  // "getdownload.site";

type VideoItem = {
  index: number;
  title: string;
  duration: string;
  download_url: string;
};

export function VideoDownloader() {
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const [items, setItems] = useState<VideoItem[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [downloading, setDownloading] = useState(false);

  const selected = items[selectedIndex];

  const fetchInfo = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess(false);
    setItems([]);
    setSelectedIndex(0);

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
      const res = await fetch(`getdownload.site/api/info/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url }),
      });

      const data = await res.json();

      if (!data.ok) {
        throw new Error(data.message || "Video not found");
      }

      // Django returns SINGLE video response, so convert it to items[]
      const wrappedItems: VideoItem[] = [
        {
          index: 0,
          title: data.title,
          duration: data.duration,
          download_url: data.download_url
        }
      ];

      setItems(wrappedItems);
      setSelectedIndex(0);
      setSuccess(true);

    } catch (err: any) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };


  const downloadVideo = async () => {
    if (!selected) return;

    setDownloading(true);
    setError("");

    const finalURL = `getdownload.site${selected.download_url}`;

    try {
      // Try direct fetch
      const response = await fetch(finalURL);

      if (!response.ok) throw new Error("Server stream fallback");

      const contentType = response.headers.get("Content-Type");
      
      if (!contentType?.includes("application/json")) {
        throw new Error("fallback");
      }

      const blob = await response.blob();
      if (blob.size < 1000) throw new Error("fallback");

      const blobUrl = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = blobUrl;
      a.download = selected.title.replace(/[^a-z0-9]/gi, "_") + ".mp4";
      a.click();
      window.URL.revokeObjectURL(blobUrl);

    } catch {
      // fallback → server handles streaming
      window.location.href = finalURL;
    } finally {
      setDownloading(false);
    }
  };


  return (
    <div className="max-w-4xl mx-auto">

      {/* Input Form */}
      <form onSubmit={fetchInfo} className="bg-gray-900 border border-gray-800 p-8 mb-8">
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
            className="px-8 py-3 bg-blue-600 text-white hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Checking...
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
          <div className="mt-4 p-4 bg-red-950/50 border border-red-900/50 flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-red-400 mt-0.5" />
            <p className="text-red-400 text-sm">{error}</p>
          </div>
        )}

        {success && (
          <div className="mt-4 p-4 bg-blue-950/50 border border-blue-900/50 flex items-start gap-3">
            <CheckCircle className="w-5 h-5 text-blue-400 mt-0.5" />
            <p className="text-blue-400 text-sm">Ready to download</p>
          </div>
        )}
      </form>


      {/* Download Button */}
      {selected && (
        <div className="bg-gray-900 border border-gray-800 p-8">
          <button
            onClick={downloadVideo}
            disabled={downloading}
            className="w-full px-6 py-3 bg-blue-600 text-white hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
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
      )}
    </div>
  );
}

'use client';

import { useEffect, useState } from 'react';

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem('cookie_consent');
    if (!accepted) {
      setVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookie_consent', 'true');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900 border-t border-gray-800 px-6 py-4 z-50">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-4 items-center justify-between">
        <p className="text-sm text-gray-300">
          We use cookies to improve your experience and analyze site traffic.
          By continuing to use this site, you agree to our{' '}
          <a href="/privacy" className="text-blue-400 underline">
            Privacy Policy
          </a>.
        </p>
        <button
          onClick={acceptCookies}
          className="px-4 py-2 bg-blue-600 text-white text-sm hover:bg-blue-700"
        >
          Accept Cookies
        </button>
      </div>
    </div>
  );
}

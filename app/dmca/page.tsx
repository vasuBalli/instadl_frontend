import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'DMCA Takedown | getdownload.site',
  description:
    'DMCA copyright infringement notice for getdownload.site.',
};

export default function DMCAPage() {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-300">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-3xl text-white mb-6">DMCA Takedown Notice</h1>

        <p className="text-sm text-gray-500 mb-8">
          Last updated: January 2026
        </p>

        <section className="space-y-6 text-sm leading-relaxed">
          <p>
            getdownload.site respects the intellectual property rights of others
            and expects users to do the same.
          </p>

          <h2 className="text-xl text-white mt-8">Copyright Infringement</h2>
          <p>
            If you believe that content accessed through getdownload.site
            infringes your copyright, you may submit a DMCA takedown request.
          </p>

          <h2 className="text-xl text-white mt-8">Required Information</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Identification of the copyrighted work</li>
            <li>The URL(s) of the allegedly infringing content</li>
            <li>Your contact information</li>
            <li>A statement of good-faith belief</li>
            <li>A statement that the information is accurate</li>
          </ul>

          <p>
            Upon receiving a valid DMCA request, we will promptly investigate
            and take appropriate action.
          </p>

          <h2 className="text-xl text-white mt-8">Disclaimer</h2>
          <p>
            getdownload.site does not host any media files. All content remains
            the property of its respective owners.
          </p>
        </section>
      </div>
    </div>
  );
}

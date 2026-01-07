import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms & Conditions | getdownload.site',
  description:
    'Read the terms and conditions for using getdownload.site Instagram video downloader.',
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-300">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-3xl md:text-4xl text-white mb-6">
          Terms & Conditions
        </h1>

        <p className="text-sm text-gray-500 mb-8">
          Last updated: January 2026
        </p>

        <section className="space-y-6 text-sm leading-relaxed">
          <p>
            Welcome to <strong>getdownload.site</strong>. By accessing or using
            this website, you agree to be bound by these Terms and Conditions. If
            you do not agree, please do not use our service.
          </p>

          <h2 className="text-xl text-white mt-8">1. About the Service</h2>
          <p>
            getdownload.site provides an online tool that allows users to
            download publicly available Instagram videos and reels for personal
            use only. We are not affiliated with Instagram or Meta Platforms,
            Inc.
          </p>

          <h2 className="text-xl text-white mt-8">2. User Responsibilities</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>You must not download private or restricted content</li>
            <li>You must not use downloaded content for commercial purposes</li>
            <li>You must respect copyright and intellectual property rights</li>
            <li>You must comply with Instagram’s Terms of Service</li>
          </ul>

          <h2 className="text-xl text-white mt-8">
            3. Copyright & Intellectual Property
          </h2>
          <p>
            All media content belongs to its respective owners. getdownload.site
            does not host any media files and acts only as a technical tool to
            process publicly available URLs.
          </p>

          <h2 className="text-xl text-white mt-8">4. Disclaimer</h2>
          <p>
            The service is provided “as is” without any warranties. We do not
            guarantee availability, accuracy, or uninterrupted access.
          </p>

          <h2 className="text-xl text-white mt-8">
            5. Limitation of Liability
          </h2>
          <p>
            getdownload.site shall not be liable for any direct or indirect
            damages resulting from the use or inability to use the service.
          </p>

          <h2 className="text-xl text-white mt-8">6. Changes to Terms</h2>
          <p>
            We reserve the right to modify these Terms at any time. Continued
            use of the service constitutes acceptance of the updated Terms.
          </p>

          <h2 className="text-xl text-white mt-8">7. Contact</h2>
          <p>
            If you have questions about these Terms, please contact us through
            the website.
          </p>
        </section>
      </div>
    </div>
  );
}

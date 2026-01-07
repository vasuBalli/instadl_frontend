import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | getdownload.site',
  description:
    'Learn how getdownload.site handles user data and protects your privacy.',
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-300">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-3xl md:text-4xl text-white mb-6">
          Privacy Policy
        </h1>

        <p className="text-sm text-gray-500 mb-8">
          Last updated: January 2026
        </p>

        <section className="space-y-6 text-sm leading-relaxed">
          <p>
            At <strong>getdownload.site</strong>, your privacy is important to
            us. This Privacy Policy explains how we collect and use information.
          </p>

          <h2 className="text-xl text-white mt-8">1. Information We Collect</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Instagram video URLs provided by users</li>
            <li>IP address and basic device information</li>
            <li>Anonymous usage and error logs</li>
          </ul>

          <p>
            We do <strong>not</strong> collect passwords, login credentials, or
            personal identification data.
          </p>

          <h2 className="text-xl text-white mt-8">
            2. How We Use Information
          </h2>
          <ul className="list-disc list-inside space-y-2">
            <li>To process download requests</li>
            <li>To improve service performance</li>
            <li>To prevent abuse and misuse</li>
          </ul>

          <h2 className="text-xl text-white mt-8">3. Cookies</h2>
          <p>
            We may use minimal cookies for functionality and analytics. You can
            disable cookies in your browser settings.
          </p>

          <h2 className="text-xl text-white mt-8">
            4. Data Retention
          </h2>
          <p>
            We do not permanently store video URLs or downloaded media files.
            All processing is temporary.
          </p>

          <h2 className="text-xl text-white mt-8">5. Data Security</h2>
          <p>
            We implement reasonable security measures, but no system is fully
            secure. Use the service at your own discretion.
          </p>

          <h2 className="text-xl text-white mt-8">
            6. Children’s Privacy
          </h2>
          <p>
            This service is not intended for users under the age of 13.
          </p>

          <h2 className="text-xl text-white mt-8">
            7. Changes to This Policy
          </h2>
          <p>
            We may update this Privacy Policy periodically. Changes will be
            reflected on this page.
          </p>

          <h2 className="text-xl text-white mt-8">8. Contact</h2>
          <p>
            If you have questions about this Privacy Policy, please contact us
            through the website.
          </p>
        </section>
      </div>
    </div>
  );
}

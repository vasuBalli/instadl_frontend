import { Zap, Shield, Smartphone, HardDrive } from 'lucide-react';

export function Features() {
  const features = [
    {
      icon: Zap,
      title: 'Fast Processing',
      description: 'Download Instagram videos in seconds with our optimized processing engine.'
    },
    {
      icon: Shield,
      title: 'Secure & Private',
      description: 'Your data and downloads are never stored on our servers. Complete privacy guaranteed.'
    },
    {
      icon: Smartphone,
      title: 'Cross-Platform',
      description: 'Works seamlessly on desktop, tablet, and mobile devices with full responsive design.'
    },
    {
      icon: HardDrive,
      title: 'High Quality',
      description: 'Download videos in the highest quality available, preserving original resolution.'
    }
  ];

  return (
    <section id="features" className="border-y border-gray-800/50 bg-gray-900/30 py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl text-white mb-4 tracking-tight">
            Professional Features
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Everything you need for reliable Instagram video downloads.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-900 border border-gray-800 p-6 hover:border-gray-700 transition-colors"
            >
              <div className="w-12 h-12 bg-blue-600/10 flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-blue-500" />
              </div>
              <h3 className="text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

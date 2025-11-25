import { Copy, Search, Download } from 'lucide-react';

export function HowItWorks() {
  const steps = [
    {
      icon: Copy,
      number: '1',
      title: 'Copy Video URL',
      description: 'Navigate to Instagram and copy the link of the video or reel you want to download.'
    },
    {
      icon: Search,
      number: '2',
      title: 'Paste and Process',
      description: 'Paste the URL into the input field above and click the download button to process.'
    },
    {
      icon: Download,
      number: '3',
      title: 'Download Video',
      description: 'Preview the video details and download it in your preferred quality format.'
    }
  ];

  return (
    <section id="how-it-works" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl text-white mb-4 tracking-tight">
            How It Works
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Download Instagram videos in three simple steps. No registration required.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-[60%] w-[80%] h-px bg-gray-800"></div>
              )}
              
              <div className="relative bg-gray-900 border border-gray-800 p-8 hover:border-gray-700 transition-colors">
                {/* Number Badge */}
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-blue-600 flex items-center justify-center text-white">
                  {step.number}
                </div>
                
                {/* Icon */}
                <div className="w-14 h-14 bg-blue-600/10 flex items-center justify-center mb-6 mt-4">
                  <step.icon className="w-7 h-7 text-blue-500" />
                </div>
                
                <h3 className="text-white mb-3">{step.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

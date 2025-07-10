import { useState, useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navigation from '../../components/Navigation';

const EcommerceWebsite = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const workItems = [
    {
      id: 1,
      title: 'E-commerce Website Design',
      description: 'Complete e-commerce website design with modern interface',
      image: 'https://i.imghippo.com/files/AAB6734HBk.jpeg'
    },
    {
      id: 2,
      title: 'E-commerce Platform Layout',
      description: 'Professional e-commerce platform with optimized user experience',
      image: 'https://i.imghippo.com/files/SBs2501f.jpeg'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <div className="pt-24 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <Link 
              to="/portfolio"
              className="inline-flex items-center text-gray-600 hover:text-black transition-colors duration-300 mb-8"
            >
              <ArrowLeft className="mr-2 h-5 w-5" />
              Back to Portfolio
            </Link>
          </div>

          <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-4xl md:text-6xl font-light mb-6 tracking-tight">E-commerce Website</h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Modern, responsive e-commerce website with clean design and seamless user experience.
            </p>
            
            <div className="flex flex-wrap gap-2 mb-12">
              {['Web Design', 'E-commerce', 'Responsive'].map((tag) => (
                <span key={tag} className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="mb-12">
              <img 
                src="https://i.postimg.cc/Z5C1CtCS/Whats-App-Image-2025-07-07-at-7-02-59-PM.jpg" 
                alt="E-commerce Website"
                className="w-full rounded-2xl shadow-lg"
              />
            </div>
          </div>

          {/* Work Items Section */}
          <div className={`transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="mb-12">
              <h2 className="text-3xl font-light mb-8 tracking-tight">Website Showcase</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {workItems.map((item, index) => (
                  <div 
                    key={item.id}
                    className="bg-gray-50 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                    style={{ animationDelay: `${index * 100}ms` }}
                    onClick={() => window.open(item.image, '_blank')}
                  >
                    <div className="h-64 overflow-hidden">
                      <img 
                        src={item.image} 
                        alt={item.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-medium mb-3">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className={`transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="grid md:grid-cols-2 gap-12 mb-12">
              <div>
                <h2 className="text-2xl font-medium mb-4">Project Overview</h2>
                <p className="text-gray-600 leading-relaxed">
                  A sleek and modern e-commerce website designed to provide an exceptional shopping experience. 
                  The design focuses on usability, conversion optimization, and mobile responsiveness.
                </p>
              </div>
              <div>
                <h2 className="text-2xl font-medium mb-4">Key Features</h2>
                <ul className="text-gray-600 space-y-2">
                  <li>• Responsive design for all devices</li>
                  <li>• Intuitive navigation and search</li>
                  <li>• Product showcase and galleries</li>
                  <li>• Streamlined checkout process</li>
                  <li>• Customer account management</li>
                </ul>
              </div>
            </div>

            {/* Confidentiality Note */}
            <div className="mb-12 p-6 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-500 italic leading-relaxed">
                <strong>Note:</strong> These images are layouts and examples of my work, not the actual websites I developed. Due to client confidentiality agreements, I am not permitted to showcase their real products.
              </p>
            </div>
          </div>

          <div className={`transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} text-center`}>
            <div className="bg-gray-50 rounded-2xl p-12">
              <h2 className="text-3xl font-light mb-4 tracking-tight">Need an E-commerce Website?</h2>
              <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                Let's build a beautiful and functional online store for your business.
              </p>
              <a
                href="mailto:naitikpatel1312@gmail.com"
                className="inline-block bg-black text-white px-8 py-4 rounded-lg font-medium hover:bg-gray-800 transition-colors duration-300"
              >
                Start Your Project
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EcommerceWebsite;

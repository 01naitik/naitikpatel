
import { useState, useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navigation from '../../components/Navigation';

const ThreeDMockups = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const workItems = [
    {
      id: 1,
      title: 'Product Packaging',
      description: '3D rendered packaging designs for consumer products',
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=300&fit=crop'
    },
    {
      id: 2,
      title: 'Brand Mockups',
      description: 'Realistic brand application mockups in 3D environments',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop'
    },
    {
      id: 3,
      title: 'Product Visualization',
      description: 'High-quality 3D product renders for marketing materials',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop'
    },
    {
      id: 4,
      title: 'Environmental Design',
      description: '3D scene creation with custom lighting and materials',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=300&fit=crop'
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
            <h1 className="text-4xl md:text-6xl font-light mb-6 tracking-tight">3D Product Mockups</h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              High-quality 3D product mockups created in Blender for various branding projects.
            </p>
            
            <div className="flex flex-wrap gap-2 mb-12">
              {['3D Design', 'Blender', 'Product Mockup'].map((tag) => (
                <span key={tag} className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="mb-12">
              <img 
                src="https://i.postimg.cc/hPYWfxGr/mokupdesign.jpg" 
                alt="3D Product Mockups"
                className="w-full rounded-2xl shadow-lg"
              />
            </div>
          </div>

          {/* Work Items Section */}
          <div className={`transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="mb-12">
              <h2 className="text-3xl font-light mb-8 tracking-tight">3D Design Services</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {workItems.map((item, index) => (
                  <div 
                    key={item.id}
                    className="bg-gray-50 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={item.image} 
                        alt={item.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-medium mb-2">{item.title}</h3>
                      <p className="text-gray-600 text-sm">{item.description}</p>
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
                  Professional 3D product mockups created using Blender to showcase branding designs in realistic 
                  environments. These mockups help clients visualize their products before production.
                </p>
              </div>
              <div>
                <h2 className="text-2xl font-medium mb-4">Capabilities</h2>
                <ul className="text-gray-600 space-y-2">
                  <li>• Photorealistic rendering</li>
                  <li>• Custom lighting and materials</li>
                  <li>• Product visualization</li>
                  <li>• Environmental context</li>
                  <li>• High-resolution outputs</li>
                </ul>
              </div>
            </div>
          </div>

          <div className={`transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} text-center`}>
            <div className="bg-gray-50 rounded-2xl p-12">
              <h2 className="text-3xl font-light mb-4 tracking-tight">Need 3D Product Mockups?</h2>
              <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                Let's create stunning 3D visualizations of your products and designs.
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

export default ThreeDMockups;

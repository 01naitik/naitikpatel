
import { useState, useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navigation from '../../components/Navigation';

const ThreeDMockups = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

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

          <div className={`transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
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

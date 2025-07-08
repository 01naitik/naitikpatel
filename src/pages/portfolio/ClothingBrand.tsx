
import { useState, useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navigation from '../../components/Navigation';

const ClothingBrand = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const workItems = [
    {
      id: 1,
      title: 'T-Shirt Designs',
      description: 'Creative apparel designs with unique graphics and typography',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop'
    },
    {
      id: 2,
      title: 'Marketing Posters',
      description: 'Eye-catching promotional materials for brand campaigns',
      image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=300&fit=crop'
    },
    {
      id: 3,
      title: 'Sticker Collection',
      description: 'Brand merchandise stickers for promotional use',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop'
    },
    {
      id: 4,
      title: '3D Product Mockups',
      description: 'Realistic 3D renderings of apparel and merchandise',
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=300&fit=crop'
    },
    {
      id: 5,
      title: 'Website Design',
      description: 'Complete e-commerce website design and layout',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=300&fit=crop'
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
            <h1 className="text-4xl md:text-6xl font-light mb-6 tracking-tight">Clothing Brand Creative Package</h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Full creative package including posters, T-shirt designs, stickers, 3D mockups, and website design.
            </p>
            
            <div className="flex flex-wrap gap-2 mb-12">
              {['Brand Package', 'T-shirt Design', '3D Mockups', 'Website'].map((tag) => (
                <span key={tag} className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="mb-12">
              <img 
                src="https://i.postimg.cc/MGSdx7SB/Whats-App-Image-2025-07-07-at-6-43-53-PM.jpg" 
                alt="Clothing Brand Creative Package"
                className="w-full rounded-2xl shadow-lg"
              />
            </div>
          </div>

          {/* Work Items Section */}
          <div className={`transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="mb-12">
              <h2 className="text-3xl font-light mb-8 tracking-tight">Package Components</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                  A comprehensive creative package for a streetwear clothing brand that needed a complete visual identity 
                  and marketing materials. The project encompassed everything from product design to digital presence.
                </p>
              </div>
              <div>
                <h2 className="text-2xl font-medium mb-4">Deliverables</h2>
                <ul className="text-gray-600 space-y-2">
                  <li>• T-shirt and apparel designs</li>
                  <li>• Marketing posters and banners</li>
                  <li>• Sticker and merchandise designs</li>
                  <li>• 3D product mockups</li>
                  <li>• Website design and layout</li>
                </ul>
              </div>
            </div>
          </div>

          <div className={`transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} text-center`}>
            <div className="bg-gray-50 rounded-2xl p-12">
              <h2 className="text-3xl font-light mb-4 tracking-tight">Need a Complete Brand Package?</h2>
              <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                Let's create a comprehensive creative package for your clothing brand.
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

export default ClothingBrand;

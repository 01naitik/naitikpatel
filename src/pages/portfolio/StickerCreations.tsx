
import { useState, useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navigation from '../../components/Navigation';

const StickerCreations = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const stickerItems = [
    {
      id: 1,
      image: 'https://i.imghippo.com/files/EIP8674WkU.jpg'
    },
    {
      id: 2,
      image: 'https://i.imghippo.com/files/EyJT4385gcU.jpeg'
    },
    {
      id: 3,
      image: 'https://i.imghippo.com/files/IPim4554FBs.jpeg'
    },
    {
      id: 4,
      image: 'https://i.imghippo.com/files/gAHG4511VD.jpeg'
    },
    {
      id: 5,
      image: 'https://i.imghippo.com/files/Lg1643Q.jpg'
    },
    {
      id: 6,
      image: 'https://i.imghippo.com/files/GYd7211NBs.jpg'
    },
    {
      id: 7,
      image: 'https://i.imghippo.com/files/dGH5305JC.png'
    },
    {
      id: 8,
      image: 'https://i.imghippo.com/files/iK9162PIU.jpeg'
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
            <h1 className="text-4xl md:text-6xl font-light mb-6 tracking-tight">Sticker Creations</h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Creative sticker designs for brands, events, and promotional campaigns with unique visual appeal.
            </p>
            
            <div className="flex flex-wrap gap-2 mb-12">
              {['Sticker Design', 'Graphics', 'Brand Materials'].map((tag) => (
                <span key={tag} className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="mb-12">
              <img 
                src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=400&fit=crop" 
                alt="Sticker Creations"
                className="w-full rounded-2xl shadow-lg"
              />
            </div>
          </div>

          {/* Sticker Collection Section */}
          <div className={`transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="mb-12">
              <h2 className="text-3xl font-light mb-8 tracking-tight">Sticker Collection</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {stickerItems.map((item, index) => (
                  <div 
                    key={item.id}
                    className="rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <img 
                      src={item.image} 
                      alt={`Sticker ${item.id}`}
                      className="w-full h-auto hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
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
                  A diverse collection of sticker designs created for various purposes including branding, 
                  promotional campaigns, events, and personal use. Each design is crafted with attention 
                  to visual impact and brand consistency.
                </p>
              </div>
              <div>
                <h2 className="text-2xl font-medium mb-4">Design Features</h2>
                <ul className="text-gray-600 space-y-2">
                  <li>• High-quality vector graphics</li>
                  <li>• Vibrant color schemes</li>
                  <li>• Print-ready formats</li>
                  <li>• Custom illustrations</li>
                  <li>• Brand-aligned designs</li>
                </ul>
              </div>
            </div>
          </div>

          <div className={`transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} text-center`}>
            <div className="bg-gray-50 rounded-2xl p-12">
              <h2 className="text-3xl font-light mb-4 tracking-tight">Need Custom Stickers?</h2>
              <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                Let's create unique sticker designs that represent your brand perfectly.
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

export default StickerCreations;


import { useState, useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navigation from '../../components/Navigation';
import Lightbox from '../../components/Lightbox';

const LogoCollection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [lightboxImage, setLightboxImage] = useState('');
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleImageClick = (imageUrl: string) => {
    setLightboxImage(imageUrl);
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
    setLightboxImage('');
  };

  const logoItems = [
    {
      id: 1,
      image: 'https://i.imghippo.com/files/PlYY3144jek.png'
    },
    {
      id: 2,
      image: 'https://i.imghippo.com/files/UdGL3950Sao.jpg'
    },
    {
      id: 3,
      image: 'https://i.imghippo.com/files/CQvP4491dg.jpeg'
    },
    {
      id: 4,
      image: 'https://i.imghippo.com/files/tppP2708DGY.png'
    },
    {
      id: 5,
      image: 'https://i.imghippo.com/files/sxcV9538UHc.png'
    },
    {
      id: 6,
      image: 'https://i.imghippo.com/files/nlAv4493DQ.png'
    },
    {
      id: 7,
      image: 'https://i.imghippo.com/files/nJb9536MGI.jpg'
    },
    {
      id: 8,
      image: 'https://i.imghippo.com/files/lQM4769rhI.png'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <div className="pt-24 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          
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
            <h1 className="text-4xl md:text-6xl font-light mb-6 tracking-tight">Logo Design Collection</h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              A curated collection of logo designs created for various organizations across different industries.
            </p>
            
            <div className="flex flex-wrap gap-2 mb-12">
              {['Logo Design', 'Brand Identity', 'Typography'].map((tag) => (
                <span key={tag} className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          
          <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="mb-12">
              <img 
                src="https://i.postimg.cc/kGj0ZjRq/Whats-App-Image-2025-06-24-at-2-52-16-PM.jpg" 
                alt="Logo Design Collection"
                className="w-full rounded-2xl shadow-lg cursor-pointer hover:scale-105 transition-transform duration-300"
                onClick={() => handleImageClick('https://i.postimg.cc/kGj0ZjRq/Whats-App-Image-2025-06-24-at-2-52-16-PM.jpg')}
              />
            </div>
          </div>

          <div className={`transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="mb-12">
              <h2 className="text-3xl font-light mb-8 tracking-tight">Logo Design Portfolio</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {logoItems.map((item, index) => (
                  <div 
                    key={item.id}
                    className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex items-center justify-center aspect-square cursor-pointer"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <img 
                      src={item.image} 
                      alt={`Logo ${item.id}`}
                      className="max-w-full max-h-full object-contain hover:scale-105 transition-transform duration-300"
                      onClick={() => handleImageClick(item.image)}
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
                  A diverse collection of logo designs showcasing versatility across multiple industries including 
                  technology, healthcare, retail, and creative services. Each logo is carefully crafted to reflect 
                  the unique identity and values of the respective organization.
                </p>
              </div>
              <div>
                <h2 className="text-2xl font-medium mb-4">Design Approach</h2>
                <ul className="text-gray-600 space-y-2">
                  <li>• Research-driven design process</li>
                  <li>• Multiple concept variations</li>
                  <li>• Scalable vector formats</li>
                  <li>• Color and monochrome versions</li>
                  <li>• Brand application guidelines</li>
                </ul>
              </div>
            </div>
          </div>

          <div className={`transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} text-center`}>
            <div className="bg-gray-50 rounded-2xl p-12">
              <h2 className="text-3xl font-light mb-4 tracking-tight">Need a Logo Design?</h2>
              <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                Let's create a unique logo that perfectly represents your brand identity.
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

      <Lightbox 
        isOpen={isLightboxOpen}
        imageUrl={lightboxImage}
        onClose={closeLightbox}
      />
    </div>
  );
};

export default LogoCollection;

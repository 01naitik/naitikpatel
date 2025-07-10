import { useState, useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navigation from '../../components/Navigation';
import Lightbox from '../../components/Lightbox';

const YouTubeLayouts = () => {
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

  const thumbnailItems = [
    {
      id: 1,
      image: 'https://i.imghippo.com/files/Llo9145Uw.jpg'
    },
    {
      id: 2,
      image: 'https://i.imghippo.com/files/qeEw9687WHc.jpg'
    },
    {
      id: 3,
      image: 'https://i.imghippo.com/files/Zoj6521lLg.jpg'
    },
    {
      id: 4,
      image: 'https://i.imghippo.com/files/Uq5578wI.jpg'
    },
    {
      id: 5,
      image: 'https://i.imghippo.com/files/LCo5280Ew.jpg'
    },
    {
      id: 6,
      image: 'https://i.imghippo.com/files/vtE4931cY.jpg'
    },
    {
      id: 7,
      image: 'https://i.imghippo.com/files/cDyJ9787NC.jpg'
    },
    {
      id: 8,
      image: 'https://i.imghippo.com/files/Ayc6645Qk.jpeg'
    },
    {
      id: 9,
      image: 'https://i.imghippo.com/files/pR6905Z.jpg'
    },
    {
      id: 10,
      image: 'https://i.imghippo.com/files/bMC9661oc.jpg'
    },
    {
      id: 11,
      image: 'https://i.imghippo.com/files/pja3445YLI.png'
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
            <h1 className="text-4xl md:text-6xl font-light mb-6 tracking-tight">YouTube Thumbnails and Layouts</h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Eye-catching YouTube thumbnails and streaming layouts designed to boost engagement and views.
            </p>
            
            <div className="flex flex-wrap gap-2 mb-12">
              {['Thumbnail Design', 'YouTube', 'Graphics'].map((tag) => (
                <span key={tag} className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="mb-12">
              <img 
                src="https://i.postimg.cc/6QscfD5n/Whats-App-Image-2025-07-07-at-7-25-02-PM.jpg" 
                alt="YouTube Thumbnails and Layouts"
                className="w-full rounded-2xl shadow-lg cursor-pointer hover:scale-105 transition-transform duration-300"
                onClick={() => handleImageClick('https://i.postimg.cc/6QscfD5n/Whats-App-Image-2025-07-07-at-7-25-02-PM.jpg')}
              />
            </div>
          </div>

          <div className={`transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="mb-12">
              <h2 className="text-3xl font-light mb-8 tracking-tight">Thumbnail Collection</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {thumbnailItems.map((item, index) => (
                  <div 
                    key={item.id}
                    className="rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                    style={{ animationDelay: `${index * 50}ms` }}
                    onClick={() => handleImageClick(item.image)}
                  >
                    <img 
                      src={item.image} 
                      alt={`Thumbnail ${item.id}`}
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
                  A comprehensive collection of YouTube thumbnails and streaming layouts designed to capture attention 
                  and increase click-through rates. Each design is optimized for maximum visual impact.
                </p>
              </div>
              <div>
                <h2 className="text-2xl font-medium mb-4">Design Features</h2>
                <ul className="text-gray-600 space-y-2">
                  <li>• High-contrast color schemes</li>
                  <li>• Bold typography and text placement</li>
                  <li>• Eye-catching visual elements</li>
                  <li>• Optimized for mobile viewing</li>
                  <li>• Brand-consistent designs</li>
                </ul>
              </div>
            </div>
          </div>

          <div className={`transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} text-center`}>
            <div className="bg-gray-50 rounded-2xl p-12">
              <h2 className="text-3xl font-light mb-4 tracking-tight">Need YouTube Thumbnails?</h2>
              <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                Let's create compelling thumbnails that drive clicks and grow your channel.
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

export default YouTubeLayouts;

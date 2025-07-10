
import { useState, useEffect } from 'react';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navigation from '../../components/Navigation';
import Lightbox from '../../components/Lightbox';

const BrandingKit = () => {
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

  const workItems = [
    {
      id: 1,
      title: 'Logo / Stamp Design',
      description: 'Primary logo design with elegant typography and artistic elements',
      image: 'https://i.imghippo.com/files/tBPJ2525Pog.jpeg'
    },
    {
      id: 2,
      title: 'Logo / Stamp Design',
      description: 'Alternative logo variation with refined stamp aesthetic',
      image: 'https://i.imghippo.com/files/PnT2834BSc.jpeg'
    },
    {
      id: 3,
      title: 'Business Card - Front',
      description: 'Professional business card front design with brand elements',
      image: 'https://i.imghippo.com/files/YWpa1359Uw.jpg'
    },
    {
      id: 4,
      title: 'Business Card - Back',
      description: 'Business card back design with contact information layout',
      image: 'https://i.imghippo.com/files/DGyq4938RTc.jpg'
    },
    {
      id: 5,
      title: 'Thank You Card',
      description: 'Elegant thank you card design incorporating brand identity',
      image: 'https://i.imghippo.com/files/tKIp7070DM.jpeg'
    },
    {
      id: 6,
      title: 'Certificate of Authenticity',
      description: 'Professional certificate design for artwork authentication',
      image: 'https://i.imghippo.com/files/OV1667IKo.jpg'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <div className="pt-24 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <Link 
              to="/portfolio"
              className="inline-flex items-center text-gray-600 hover:text-black transition-colors duration-300 mb-8"
            >
              <ArrowLeft className="mr-2 h-5 w-5" />
              Back to Portfolio
            </Link>
          </div>

          {/* Project Header */}
          <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-4xl md:text-6xl font-light mb-6 tracking-tight">Branding Kit for Sketch Artist</h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Complete brand identity package including logo, business cards, and style guide for a professional sketch artist.
            </p>
            
            <div className="flex flex-wrap gap-2 mb-12">
              {['Logo Design', 'Brand Identity', 'Print Design'].map((tag) => (
                <span key={tag} className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Project Image */}
          <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="mb-12">
              <img 
                src="https://i.postimg.cc/8Cbsc679/c9144e52-3345-4dfc-b1bf-c8595cdc00dd.jpg" 
                alt="Branding Kit for Sketch Artist"
                className="w-full rounded-2xl shadow-lg cursor-pointer hover:scale-105 transition-transform duration-300"
                onClick={() => handleImageClick('https://i.postimg.cc/8Cbsc679/c9144e52-3345-4dfc-b1bf-c8595cdc00dd.jpg')}
              />
            </div>
          </div>

          {/* Work Items Section */}
          <div className={`transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="mb-12">
              <h2 className="text-3xl font-light mb-8 tracking-tight">Project Components</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {workItems.map((item, index) => (
                  <div 
                    key={item.id}
                    className="bg-gray-50 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={item.image} 
                        alt={item.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        onClick={() => handleImageClick(item.image)}
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

          {/* Project Details */}
          <div className={`transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="grid md:grid-cols-2 gap-12 mb-12">
              <div>
                <h2 className="text-2xl font-medium mb-4">Project Overview</h2>
                <p className="text-gray-600 leading-relaxed">
                  This comprehensive branding project was designed for a professional sketch artist who needed a complete 
                  visual identity to establish their presence in the creative industry. The project included logo design, 
                  business card layouts, and a comprehensive style guide.
                </p>
              </div>
              <div>
                <h2 className="text-2xl font-medium mb-4">Deliverables</h2>
                <ul className="text-gray-600 space-y-2">
                  <li>• Primary and secondary logo variations</li>
                  <li>• Business card design and layout</li>
                  <li>• Thank you card design</li>
                  <li>• Certificate of authenticity template</li>
                  <li>• Brand style guide and color palette</li>
                  <li>• Typography guidelines</li>
                </ul>
              </div>
            </div>
          </div>

          <div className={`transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} text-center`}>
            <div className="bg-gray-50 rounded-2xl p-12">
              <h2 className="text-3xl font-light mb-4 tracking-tight">Interested in Similar Work?</h2>
              <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                Let's discuss how I can help create a unique brand identity for your business.
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

export default BrandingKit;

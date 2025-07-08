import { useState, useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navigation from '../../components/Navigation';

const LogoCollection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const workItems = [
    {
      id: 1,
      title: 'Tech Company Logo',
      description: 'Modern minimalist logo for technology startup',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop'
    },
    {
      id: 2,
      title: 'Healthcare Brand',
      description: 'Professional healthcare and medical service logo',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop'
    },
    {
      id: 3,
      title: 'Creative Studio',
      description: 'Artistic and creative logo for design studio',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=300&fit=crop'
    },
    {
      id: 4,
      title: 'Retail & E-commerce',
      description: 'Brand identity for retail and online business',
      image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=400&h=300&fit=crop'
    },
    {
      id: 5,
      title: 'Restaurant Brand',
      description: 'Elegant logo design for fine dining restaurant',
      image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop'
    },
    {
      id: 6,
      title: 'Fitness Center',
      description: 'Dynamic and energetic fitness brand logo',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop'
    },
    {
      id: 7,
      title: 'Financial Services',
      description: 'Professional and trustworthy financial logo',
      image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=400&h=300&fit=crop'
    },
    {
      id: 8,
      title: 'Beauty & Cosmetics',
      description: 'Elegant and luxurious beauty brand identity',
      image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&h=300&fit=crop'
    },
    {
      id: 9,
      title: 'Education Platform',
      description: 'Modern and approachable educational logo',
      image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400&h=300&fit=crop'
    },
    {
      id: 10,
      title: 'Travel Agency',
      description: 'Adventure-inspired travel and tourism logo',
      image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=400&h=300&fit=crop'
    },
    {
      id: 11,
      title: 'Real Estate',
      description: 'Premium real estate and property logo',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=300&fit=crop'
    },
    {
      id: 12,
      title: 'Non-Profit Organization',
      description: 'Meaningful and impactful non-profit brand',
      image: 'https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=400&h=300&fit=crop'
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
              A comprehensive collection of unique logo designs created for various organizations across different industries.
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
                className="w-full rounded-2xl shadow-lg"
              />
            </div>
          </div>

          {/* Logo Collection Section */}
          <div className={`transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="mb-12">
              <h2 className="text-3xl font-light mb-8 tracking-tight">Logo Design Portfolio</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {workItems.map((item, index) => (
                  <div 
                    key={item.id}
                    className="bg-gray-50 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                    style={{ animationDelay: `${index * 50}ms` }}
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
    </div>
  );
};

export default LogoCollection;

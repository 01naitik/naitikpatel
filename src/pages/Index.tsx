
import { useState, useEffect } from 'react';
import { ChevronDown, Mail, Phone, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import Metrics from '../components/Metrics';

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const portfolioItems = [
    {
      id: 5,
      title: 'E-commerce Website',
      description: 'Modern responsive web design',
      image: 'https://i.postimg.cc/Z5C1CtCS/Whats-App-Image-2025-07-07-at-7-02-59-PM.jpg'
    },
    {
      id: 3,
      title: 'Logo Collection',
      description: '20+ unique logo designs',
      image: 'https://i.postimg.cc/kGj0ZjRq/Whats-App-Image-2025-06-24-at-2-52-16-PM.jpg'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <Hero />
      
      {/* Metrics Section */}
      <Metrics />
      
      {/* About Preview */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-light mb-6 tracking-tight">Creative Professional</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Specializing in web and graphic design with a passion for blending AI innovation with aesthetic excellence.
            </p>
          </div>
          
          <div className="text-center">
            <Link 
              to="/about" 
              className="inline-flex items-center text-lg font-medium hover:text-gray-600 transition-colors duration-300 group"
            >
              Learn More About Me
              <ExternalLink className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* Portfolio Preview */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-light mb-12 tracking-tight">Selected Work</h2>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {portfolioItems.map((item) => (
              <Link 
                key={item.id}
                to="/portfolio"
                className="bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="h-48 overflow-hidden rounded-t-lg">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-medium mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </Link>
            ))}
          </div>
          
          <Link 
            to="/portfolio" 
            className="inline-flex items-center text-lg font-medium hover:text-gray-600 transition-colors duration-300 group"
          >
            View All Projects
            <ExternalLink className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
      </section>
      
      {/* Contact CTA */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-light mb-6 tracking-tight">Let's Work Together</h2>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Ready to bring your creative vision to life? Let's discuss your next project.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:naitikpatel1312@gmail.com"
              className="inline-flex items-center px-8 py-4 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors duration-300"
            >
              <Mail className="mr-2 h-5 w-5" />
              Get In Touch
            </a>
            <Link 
              to="/contact"
              className="inline-flex items-center px-8 py-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-300"
            >
              Contact Form
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;

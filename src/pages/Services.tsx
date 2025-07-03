
import { useState, useEffect } from 'react';
import { Palette, Code, Smartphone, Video } from 'lucide-react';
import Navigation from '../components/Navigation';

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services = [
    {
      icon: Palette,
      title: 'Graphic Design',
      description: 'Creating stunning visual identities that capture your brand essence.',
      features: [
        'Logo design & brand identity',
        'Social media graphics',
        'AI-generated visuals',
        'Print design (posters, flyers)',
        'T-shirt & apparel design',
        'Product mockups'
      ],
      color: 'bg-blue-50 text-blue-600'
    },
    {
      icon: Code,
      title: 'Web Design',
      description: 'Building responsive, user-friendly websites that drive results.',
      features: [
        'Landing page design',
        'Portfolio websites',
        'HTML/CSS development',
        'Responsive design',
        'Light backend work (Python)',
        'Performance optimization'
      ],
      color: 'bg-green-50 text-green-600'
    },
    {
      icon: Smartphone,
      title: 'UI/UX Design',
      description: 'Crafting intuitive user experiences that delight and engage.',
      features: [
        'User interface design',
        'Wireframing & prototyping',
        'User experience research',
        'Mobile app design',
        'Usability testing',
        'Design systems'
      ],
      color: 'bg-purple-50 text-purple-600'
    },
    {
      icon: Video,
      title: '3D & Motion Graphics',
      description: 'Bringing your ideas to life with dynamic visual storytelling.',
      features: [
        '3D modeling (Blender)',
        'Product visualizations',
        'Animated stream assets',
        'Motion graphics',
        'YouTube layouts',
        'Interactive animations'
      ],
      color: 'bg-orange-50 text-orange-600'
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Discovery',
      description: 'Understanding your goals, audience, and project requirements through detailed consultation.'
    },
    {
      step: '02',
      title: 'Strategy',
      description: 'Developing a comprehensive plan and creative direction tailored to your objectives.'
    },
    {
      step: '03',
      title: 'Design',
      description: 'Creating initial concepts and iterating based on your feedback until perfection.'
    },
    {
      step: '04',
      title: 'Delivery',
      description: 'Finalizing all assets and providing ongoing support for successful implementation.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <div className="pt-24 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-5xl md:text-7xl font-light mb-8 tracking-tight">Services</h1>
            <p className="text-xl text-gray-600 mb-16 max-w-3xl">
              I offer comprehensive design and development services to help bring your creative vision to life. 
              From concept to completion, I'm here to support your project every step of the way.
            </p>
          </div>

          {/* Services Grid */}
          <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="grid md:grid-cols-2 gap-8 mb-20">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="p-8 bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:-translate-y-1"
                >
                  <div className={`w-16 h-16 rounded-xl ${service.color} flex items-center justify-center mb-6`}>
                    <service.icon className="h-8 w-8" />
                  </div>
                  
                  <h3 className="text-2xl font-medium mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                  
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Process Section */}
          <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="mb-16">
              <h2 className="text-4xl font-light mb-8 tracking-tight text-center">My Process</h2>
              <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto mb-12">
                Every great project starts with understanding. Here's how I approach each collaboration 
                to ensure we achieve your goals together.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
              {process.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="text-6xl font-light text-gray-200 mb-4">{step.step}</div>
                  <h3 className="text-xl font-medium mb-3">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Pricing Philosophy */}
          <div className={`transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="bg-black text-white rounded-2xl p-12 text-center">
              <h2 className="text-3xl font-light mb-6 tracking-tight">Investment & Value</h2>
              <p className="text-lg opacity-90 mb-8 max-w-3xl mx-auto leading-relaxed">
                Every project is unique, and so is its pricing. I believe in transparent, value-based pricing 
                that reflects the scope, complexity, and impact of your project. Let's discuss your specific 
                needs and create a solution that fits your budget.
              </p>
              <a
                href="mailto:naitikpatel1312@gmail.com"
                className="inline-block bg-white text-black px-8 py-4 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-300"
              >
                Get Custom Quote
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;

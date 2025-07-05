import { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);
  const scrollToNext = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };
  return <section className="min-h-screen flex items-center justify-center relative pt-16 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Side - Text Content */}
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-6xl md:text-8xl font-light mb-6 tracking-tight">
            Hello
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
            — I'm Naitik, a design wizard
          </p>
          <p className="text-lg text-gray-500 mb-12 max-w-lg leading-relaxed">
            Creative Web & Graphic Designer blending AI innovation with aesthetic excellence 
            to transform ideas into visually engaging digital solutions.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <a href="mailto:naitikpatel1312@gmail.com" className="bg-black text-white px-8 py-4 rounded-lg font-medium hover:bg-gray-800 transition-colors duration-300">
              Start a Project
            </a>
            <a href="#portfolio" className="border border-gray-300 px-8 py-4 rounded-lg font-medium hover:bg-gray-50 transition-colors duration-300">
              View Work
            </a>
          </div>
        </div>

        {/* Right Side - Cartoon Image */}
        <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="relative">
            <div className="w-full max-w-md mx-auto">
              <img alt="Naitik Patel - Creative Designer" className="w-full h-auto" style={{
              backgroundColor: 'transparent',
              filter: 'contrast(1.1) saturate(1.2) brightness(1.05)',
              imageRendering: 'crisp-edges'
            }} src="https://i.postimg.cc/ZnynXmst/cartoon-removebg-preview-1-1.png" />
            </div>
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-100 rounded-full opacity-60 -z-10"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-100 rounded-full opacity-60 -z-10"></div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <button onClick={scrollToNext} className="flex flex-col items-center text-gray-400 hover:text-gray-600 transition-colors duration-300 group">
          <span className="text-sm mb-2">Scroll down</span>
          <ChevronDown className="h-6 w-6 animate-bounce group-hover:translate-y-1 transition-transform duration-300" />
        </button>
      </div>
    </section>;
};
export default Hero;
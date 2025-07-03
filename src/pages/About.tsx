
import { useState, useEffect } from 'react';
import Navigation from '../components/Navigation';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <div className="pt-24 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-5xl md:text-7xl font-light mb-12 tracking-tight">About Me</h1>
          </div>

          {/* Bio Section */}
          <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="prose prose-lg max-w-none mb-16">
              <p className="text-xl leading-relaxed text-gray-700 mb-8">
                I'm Naitik Patel, a passionate and detail-oriented creative professional specializing in web and graphic design. 
                With a keen eye for aesthetics and a deep understanding of user experience, I transform ideas into visually 
                engaging and functional digital solutions.
              </p>
              
              <p className="text-xl leading-relaxed text-gray-700">
                I thrive on turning complex concepts into clean, modern, and impactful designs that help brands stand out 
                in the digital space. My approach combines traditional design principles with cutting-edge AI tools to 
                deliver innovative solutions that exceed expectations.
              </p>
            </div>
          </div>

          {/* Education & Certifications */}
          <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="grid md:grid-cols-2 gap-12 mb-16">
              <div>
                <h2 className="text-3xl font-light mb-6 tracking-tight">Education</h2>
                <div className="space-y-4">
                  <div className="border-l-2 border-gray-200 pl-6">
                    <h3 className="text-xl font-medium mb-2">B.Tech in Computer Science</h3>
                    <p className="text-gray-600 mb-1">Bhagwan Mahavir University</p>
                    <p className="text-sm text-gray-500">Graduated 2024</p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-light mb-6 tracking-tight">Certifications</h2>
                <div className="space-y-4">
                  <div className="border-l-2 border-gray-200 pl-6">
                    <h3 className="text-lg font-medium mb-1">AI Art Generation Mastery</h3>
                    <p className="text-sm text-gray-600">Professional Certification</p>
                  </div>
                  <div className="border-l-2 border-gray-200 pl-6">
                    <h3 className="text-lg font-medium mb-1">Generative AI Mastery</h3>
                    <p className="text-sm text-gray-600">Professional Certification</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Skills */}
          <div className={`transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-3xl font-light mb-8 tracking-tight">Skills & Expertise</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="p-6 bg-gray-50 rounded-lg">
                <h3 className="text-lg font-medium mb-3">Design</h3>
                <ul className="text-gray-600 space-y-1 text-sm">
                  <li>Logo & Brand Identity</li>
                  <li>UI/UX Design</li>
                  <li>Print Design</li>
                  <li>AI-Generated Art</li>
                </ul>
              </div>
              
              <div className="p-6 bg-gray-50 rounded-lg">
                <h3 className="text-lg font-medium mb-3">Development</h3>
                <ul className="text-gray-600 space-y-1 text-sm">
                  <li>HTML/CSS</li>
                  <li>JavaScript</li>
                  <li>Python</li>
                  <li>Responsive Design</li>
                </ul>
              </div>
              
              <div className="p-6 bg-gray-50 rounded-lg">
                <h3 className="text-lg font-medium mb-3">Tools</h3>
                <ul className="text-gray-600 space-y-1 text-sm">
                  <li>Adobe Creative Suite</li>
                  <li>Figma</li>
                  <li>Blender</li>
                  <li>AI Design Tools</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Philosophy */}
          <div className={`transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} mt-16`}>
            <div className="bg-black text-white p-12 rounded-2xl">
              <h2 className="text-3xl font-light mb-6 tracking-tight">Design Philosophy</h2>
              <p className="text-lg leading-relaxed opacity-90">
                "Great design is not just about making things look beautiful—it's about creating meaningful connections 
                between brands and their audiences. I believe in the power of simplicity, the importance of user experience, 
                and the endless possibilities that emerge when creativity meets technology."
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

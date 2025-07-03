
import { useState, useEffect } from 'react';
import { Mail, Phone, ExternalLink, MapPin } from 'lucide-react';
import Navigation from '../components/Navigation';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:naitikpatel1312@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
    window.location.href = mailtoLink;
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'naitikpatel1312@gmail.com',
      link: 'mailto:naitikpatel1312@gmail.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 7016802449',
      link: 'tel:+917016802449'
    },
    {
      icon: ExternalLink,
      label: 'Fiverr',
      value: '@naitik1312',
      link: 'https://fiverr.com/naitik1312'
    },
    {
      icon: ExternalLink,
      label: 'LinkedIn',
      value: '@naitik patel',
      link: 'https://linkedin.com/in/naitik-patel'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <div className="pt-24 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-5xl md:text-7xl font-light mb-8 tracking-tight">Let's Talk</h1>
            <p className="text-xl text-gray-600 mb-16 max-w-3xl">
              Ready to bring your creative vision to life? I'd love to hear about your project and 
              explore how we can work together to achieve your goals.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h2 className="text-3xl font-light mb-8 tracking-tight">Send a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-300"
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-300"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-300"
                    placeholder="Project inquiry"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-black text-white py-4 rounded-lg font-medium hover:bg-gray-800 transition-colors duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h2 className="text-3xl font-light mb-8 tracking-tight">Get in Touch</h2>
              
              <div className="space-y-6 mb-12">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.link}
                    className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-300 group"
                  >
                    <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mr-4 group-hover:bg-black group-hover:text-white transition-all duration-300">
                      <info.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-500 mb-1">{info.label}</div>
                      <div className="font-medium">{info.value}</div>
                    </div>
                  </a>
                ))}
              </div>

              {/* Availability */}
              <div className="bg-black text-white p-8 rounded-2xl">
                <h3 className="text-xl font-medium mb-4">Current Availability</h3>
                <p className="opacity-90 mb-6">
                  I'm currently accepting new projects and collaborations. 
                  Response time is typically within 24 hours.
                </p>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-400 rounded-full mr-3"></div>
                  <span className="text-sm">Available for new projects</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;


import { useState, useEffect } from 'react';
import { ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';

const Portfolio = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const categories = [
    { id: 'all', name: 'All Work' },
    { id: 'branding', name: 'Branding' },
    { id: 'web', name: 'Web Design' },
    { id: 'graphics', name: 'Graphics' },
    { id: 'motion', name: '3D & Motion' }
  ];

  const projects = [
    {
      id: 1,
      title: 'Branding Kit for Sketch Artist',
      category: 'branding',
      description: 'Complete brand identity package including logo, business cards, and style guide for a professional sketch artist.',
      image: 'https://i.postimg.cc/8Cbsc679/c9144e52-3345-4dfc-b1bf-c8595cdc00dd.jpg',
      tags: ['Logo Design', 'Brand Identity', 'Print Design'],
      link: '/portfolio/branding-kit'
    },
    {
      id: 2,
      title: 'Clothing Brand Creative Packages and T-Shirt Designs',
      category: 'branding',
      description: 'Complete creative packages including T-shirt designs, branding materials, and visual identity elements.',
      image: 'https://i.postimg.cc/MGSdx7SB/Whats-App-Image-2025-07-07-at-6-43-53-PM.jpg',
      tags: ['Brand Package', 'T-shirt Design', 'Creative Design'],
      link: '/portfolio/clothing-brand'
    },
    {
      id: 3,
      title: 'Logo Design Collection',
      category: 'branding',
      description: 'A curated collection of logo designs created for various organizations across different industries.',
      image: 'https://i.postimg.cc/kGj0ZjRq/Whats-App-Image-2025-06-24-at-2-52-16-PM.jpg',
      tags: ['Logo Design', 'Brand Identity', 'Typography'],
      link: '/portfolio/logo-collection'
    },
    {
      id: 4,
      title: 'YouTube Thumbnails and Layouts',
      category: 'graphics',
      description: 'Eye-catching YouTube thumbnails and streaming layouts designed to boost engagement and views.',
      image: 'https://i.postimg.cc/6QscfD5n/Whats-App-Image-2025-07-07-at-7-25-02-PM.jpg',
      tags: ['Thumbnail Design', 'YouTube', 'Graphics'],
      link: '/portfolio/youtube-layouts'
    },
    {
      id: 5,
      title: 'E-commerce Website',
      category: 'web',
      description: 'Modern, responsive e-commerce website with clean design and seamless user experience.',
      image: 'https://i.postimg.cc/Z5C1CtCS/Whats-App-Image-2025-07-07-at-7-02-59-PM.jpg',
      tags: ['Web Design', 'E-commerce', 'Responsive'],
      link: '/portfolio/ecommerce-website'
    },
    {
      id: 6,
      title: '3D Product Mockups',
      category: 'motion',
      description: 'High-quality 3D product mockups created in Blender for various branding projects.',
      image: 'https://i.postimg.cc/hPYWfxGr/mokupdesign.jpg',
      tags: ['3D Design', 'Blender', 'Product Mockup'],
      link: '/portfolio/3d-mockups'
    },
    {
      id: 7,
      title: 'Sticker Creations',
      category: 'graphics',
      description: 'Creative sticker designs for brands, events, and promotional campaigns with unique visual appeal.',
      image: 'https://i.imghippo.com/files/p4952Uds.jpeg',
      tags: ['Sticker Design', 'Graphics', 'Brand Materials'],
      link: '/portfolio/sticker-creations'
    }
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <div className="pt-24 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-5xl md:text-7xl font-light mb-8 tracking-tight">Portfolio</h1>
            <p className="text-xl text-gray-600 mb-12 max-w-2xl">
              A curated selection of my recent work spanning branding, web design, and creative digital solutions.
            </p>
          </div>

          {/* Category Filter */}
          <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="flex flex-wrap gap-4 mb-12">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-black text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <Link
                  key={project.id}
                  to={project.link}
                  className="group cursor-pointer"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden hover:-translate-y-2">
                    {/* Project Image */}
                    <div className="h-64 relative overflow-hidden">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300 flex items-center justify-center">
                        <ExternalLink className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 h-8 w-8" />
                      </div>
                    </div>
                    
                    {/* Project Info */}
                    <div className="p-6">
                      <h3 className="text-xl font-medium mb-3 group-hover:text-gray-600 transition-colors duration-300">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 mb-4 leading-relaxed">
                        {project.description}
                      </p>
                      
                      {/* Tags */}
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Contact CTA */}
          <div className={`transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} mt-20 text-center`}>
            <div className="bg-gray-50 rounded-2xl p-12">
              <h2 className="text-3xl font-light mb-4 tracking-tight">Like What You See?</h2>
              <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                I'm always excited to work on new projects and bring creative visions to life. 
                Let's discuss how we can collaborate.
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

export default Portfolio;

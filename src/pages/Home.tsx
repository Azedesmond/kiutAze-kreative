import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../components/Hero.module.css';
import { ArrowRight, Brush, Users, Heart, Palette, Award } from 'lucide-react';
import { workspace, artclass3, communityservice4 } from '../Image/assets';

const Home: React.FC = () => {
  const highlights = [
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Hyper-Realistic Art",
      description: "Detailed pencil portraits that capture the essence of humanity",
      link: "/portfolio"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Art Education",
      description: "Teaching individuals and groups, nurturing creative potential",
      link: "/art-classes"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Community Impact",
      description: "Monthly visits to orphanages and schools for art programs",
      link: "/community-work"
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-stone-900 via-stone-800 to-stone-700">
        <div className={`absolute inset-0 ${styles.backgroundPattern}`}></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Content */}
            <div className="text-center lg:text-left">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                <span className="block">Bringing Art</span>
                <span className="block text-amber-400">to Life</span>
              </h1>
              
              <p className="text-lg sm:text-xl text-stone-300 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Hyper-realistic pencil artist specializing in portraits and storytelling. 
                Teaching art, transforming communities, and creating connections through creativity.
                Doing this cause 
                <span className='text-amber-400 italic'> pencil no di sleep</span>
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
                <Link
                  to="/portfolio"
                  className="bg-amber-400 text-stone-900 px-6 lg:px-8 py-3 rounded-lg font-semibold hover:bg-amber-300 transition-colors duration-200 flex items-center justify-center space-x-2"
                >
                  <span>View My Work</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
                
                <Link
                  to="/contact"
                  className="border-2 border-white text-white px-6 lg:px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-stone-900 transition-all duration-200 text-center"
                >
                  Get In Touch
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 lg:gap-8 text-center">
                <div>
                  <Brush className="w-6 h-6 lg:w-8 lg:h-8 text-amber-400 mx-auto mb-2" />
                  <div className="text-xl lg:text-2xl font-bold text-white">50+</div>
                  <div className="text-stone-400 text-xs lg:text-sm">Artworks Created</div>
                </div>
                <div>
                  <Users className="w-6 h-6 lg:w-8 lg:h-8 text-amber-400 mx-auto mb-2" />
                  <div className="text-xl lg:text-2xl font-bold text-white">100+</div>
                  <div className="text-stone-400 text-xs lg:text-sm">Students Taught</div>
                </div>
                <div>
                  <Heart className="w-6 h-6 lg:w-8 lg:h-8 text-amber-400 mx-auto mb-2" />
                  <div className="text-xl lg:text-2xl font-bold text-white">10+</div>
                  <div className="text-stone-400 text-xs lg:text-sm">Community Visits</div>
                </div>
              </div>
            </div>

            {/* Featured Artwork */}
            <div className="relative mt-8 lg:mt-0">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
                <img
                  src={workspace}
                  alt="Featured hyper-realistic pencil portrait"
                  className="w-full h-64 sm:h-80 lg:h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 lg:bottom-6 left-4 lg:left-6 text-white">
                  <h3 className="text-lg lg:text-xl font-semibold mb-2">Featured Artwork</h3>
                  <p className="text-stone-300 text-sm lg:text-base">Hyper-realistic pencil portrait</p>
                </div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 lg:w-24 lg:h-24 bg-amber-400/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-20 h-20 lg:w-32 lg:h-32 bg-amber-400/10 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* What I Do Section */}
      <section className="py-16 lg:py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-stone-900 mb-4">
              What I <span className="text-amber-600">Do</span>
            </h2>
            <p className="text-lg lg:text-xl text-stone-600 max-w-3xl mx-auto">
              Combining artistic excellence with community service to create meaningful impact through creativity.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {highlights.map((highlight, index) => (
              <Link
                key={index}
                to={highlight.link}
                className="bg-white p-6 lg:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <div className="text-amber-600 mb-4 group-hover:scale-110 transition-transform duration-200">
                  {highlight.icon}
                </div>
                <h3 className="text-xl font-bold text-stone-900 mb-3">{highlight.title}</h3>
                <p className="text-stone-600 mb-4">{highlight.description}</p>
                <div className="flex items-center text-amber-600 font-medium group-hover:translate-x-2 transition-transform duration-200">
                  <span className="text-sm">Learn More</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Work Preview */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-stone-900 mb-4">
              Featured <span className="text-amber-600">Work</span>
            </h2>
            <p className="text-lg lg:text-xl text-stone-600 max-w-3xl mx-auto">
              A glimpse into my artistic journey and community impact.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            <div className="relative group">
              <img
                src={workspace}
                alt="Portrait artwork"
                className="w-full h-64 lg:h-80 object-cover rounded-2xl shadow-lg group-hover:shadow-xl transition-shadow duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-semibold mb-1">Portrait Series</h3>
                  <p className="text-sm text-stone-200">Hyper-realistic pencil work</p>
                </div>
              </div>
            </div>

            <div className="relative group">
              <img
                src={artclass3}
                alt="Art class session"
                className="w-full h-64 lg:h-80 object-cover rounded-2xl shadow-lg group-hover:shadow-xl transition-shadow duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-semibold mb-1">Art Education</h3>
                  <p className="text-sm text-stone-200">Teaching the next generation</p>
                </div>
              </div>
            </div>

            <div className="relative group md:col-span-2 lg:col-span-1">
              <img
                src={communityservice4}
                alt="Community workshop"
                className="w-full h-64 lg:h-80 object-cover rounded-2xl shadow-lg group-hover:shadow-xl transition-shadow duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-semibold mb-1">Community Impact</h3>
                  <p className="text-sm text-stone-200">Transforming lives through art</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              to="/portfolio"
              className="inline-flex items-center space-x-2 bg-amber-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-amber-700 transition-colors duration-200"
            >
              <span>View Full Portfolio</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 lg:py-20 bg-gradient-to-r from-amber-600 to-amber-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Start Your Artistic Journey?
          </h2>
          <p className="text-lg lg:text-xl text-amber-100 mb-8 max-w-2xl mx-auto">
            Whether you're looking for a custom portrait, want to learn art, or interested in 
            community partnerships, let's create something beautiful together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-amber-600 px-8 py-3 rounded-lg font-semibold hover:bg-stone-100 transition-colors duration-200"
            >
              Get In Touch
            </Link>
            <Link
              to="/art-classes"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-amber-600 transition-all duration-200"
            >
              Explore Classes
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
import React from 'react';
import styles from './Hero.module.css'; // Assuming you have some styles in a CSS module
import { ArrowRight, Brush, Users, Heart } from 'lucide-react';
import  {workspace} from '../Image/assets';

interface HeroProps {
  onNavigate: (section: string) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-stone-900 via-stone-800 to-stone-700">
      {/* Background Pattern */}
      <div className={`absolute inset-0 ${styles.backgroundPattern}`}></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="block">Bringing Art</span>
              <span className="block text-amber-400">to Life</span>
            </h1>
            
            <p className="text-xl text-stone-300 mb-8 leading-relaxed">
              Hyper-realistic pencil artist specializing in portraits and storytelling. 
              Teaching art, transforming communities, and creating connections through creativity.
              Doing this cause 
              <span className='text-amber-400 italic'> pencil no di sleep</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <button
                onClick={() => onNavigate('portfolio')}
                className="bg-amber-400 text-stone-900 px-8 py-3 rounded-lg font-semibold hover:bg-amber-300 transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <span>View My Work</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              
              <button
                onClick={() => onNavigate('contact')}
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-stone-900 transition-all duration-200"
              >
                Get In Touch
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 text-center">
              <div>
                <Brush className="w-8 h-8 text-amber-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">50+</div>
                <div className="text-stone-400 text-sm">Artworks Created</div>
              </div>
              <div>
                <Users className="w-8 h-8 text-amber-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">100+</div>
                <div className="text-stone-400 text-sm">Students Taught</div>
              </div>
              <div>
                <Heart className="w-8 h-8 text-amber-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">10+</div>
                <div className="text-stone-400 text-sm">Community Visits</div>
              </div>
            </div>
          </div>

          {/* Featured Artwork */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
              <img
                src={workspace}
                alt="Featured hyper-realistic pencil portrait"
                className="w-full h-96 lg:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-xl font-semibold mb-2">Featured Artwork</h3>
                <p className="text-stone-300">Hyper-realistic pencil portrait</p>
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-amber-400/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-amber-400/10 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
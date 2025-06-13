import React from 'react';
import { Heart, Users, Palette, Globe } from 'lucide-react';
import { CommunityProgram } from '../types';
import { communityservice, communityservice4, communityservice1, communityservice5} from '../Image/assets';

const CommunityWork: React.FC = () => {
  const programs: CommunityProgram[] = [
    {
      id: '1',
      title: 'Orphanage Art Sessions',
      description: 'Monthly visits teaching art fundamentals to children in local orphanages, fostering creativity and self-expression.',
      imageUrl:communityservice,
      location: 'Helping Hands Orphanage, Bamenda',
      date: '3rd May 2025'
    },
    {
      id: '2',
      title: 'HIV Sensitization Program',
      description: 'Educational workshops combining art therapy with health awareness to create safe spaces for important conversations.',
      imageUrl: communityservice1,
      location: 'Community Centers',
      date: 'Quarterly'
    },
    {
      id: '3',
      title: 'Creative Dance Workshops',
      description: 'Integrating movement and visual arts to provide holistic creative expression experiences for youth.',
      imageUrl: communityservice5,
      location: 'Schools & Centers',
      date: 'Monthly'
    }
  ];

  const impactStats = [
    { number: '200+', label: 'Children Reached', icon: <Users className="w-6 h-6" /> },
    { number: '10+', label: 'Community Visits', icon: <Heart className="w-6 h-6" /> },
    { number: '8+', label: 'Partner Organizations', icon: <Globe className="w-6 h-6" /> },
    { number: '3', label: 'Years of Service', icon: <Palette className="w-6 h-6" /> }
  ];

  return (
    <section id="community" className="py-20 bg-gradient-to-br from-stone-900 to-stone-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Community <span className="text-amber-400">Impact</span>
          </h2>
          <p className="text-xl text-stone-300 max-w-3xl mx-auto">
            Art has the power to heal, connect, and transform communities. Through regular outreach programs, 
            I'm committed to sharing the joy of creativity with those who need it most, creating lasting 
            positive change one pencilstrokes and brushstroke at a time.
          </p>
        </div>

        {/* Mission Statement */}
        <div className="bg-stone-800/50 rounded-2xl p-8 mb-16 backdrop-blur-sm">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Our Community Mission</h3>
              <p className="text-stone-300 mb-6">
                Every two months, I visit local orphanages and community centers to conduct art workshops, 
                HIV sensitization programs, and creative expression sessions. These visits aren't just about 
                teaching art, they're about building connections, fostering hope, and empowering young minds 
                through creativity and preaching CHANGE!
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Heart className="w-5 h-5 text-amber-400" />
                  <span className="text-stone-300">Building emotional resilience through art</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="w-5 h-5 text-amber-400" />
                  <span className="text-stone-300">Creating supportive community networks</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Palette className="w-5 h-5 text-amber-400" />
                  <span className="text-stone-300">Fostering creative self-expression</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src={communityservice4}
                alt="Community art workshop"
                className="w-full h-64 object-cover rounded-xl shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-amber-600/20 to-transparent rounded-xl"></div>
            </div>
          </div>
        </div>

        {/* Impact Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {impactStats.map((stat, index) => (
            <div key={index} className="text-center bg-stone-800/30 rounded-xl p-6 backdrop-blur-sm">
              <div className="text-amber-400 mb-3 flex justify-center">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold mb-2">{stat.number}</div>
              <div className="text-stone-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Programs */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {programs.map((program) => (
            <div key={program.id} className="bg-stone-800/50 rounded-2xl overflow-hidden backdrop-blur-sm hover:bg-stone-800/70 transition-all duration-300">
              <img
                src={program.imageUrl}
                alt={program.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">{program.title}</h3>
                <p className="text-stone-300 mb-4">{program.description}</p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center space-x-2">
                    <Globe className="w-4 h-4 text-amber-400" />
                    <span className="text-stone-400">{program.location}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Heart className="w-4 h-4 text-amber-400" />
                    <span className="text-stone-400">{program.date}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center bg-amber-600 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-stone-900 mb-4">Join Our Community Mission</h3>
          <p className="text-stone-800 mb-6 max-w-2xl mx-auto">
            Want to support our community outreach programs or partner with us for your organization? 
            Let's work together to bring the transformative power of art to more communities.
          </p>
          <button className="bg-stone-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-stone-800 transition-colors duration-200">
            Get Involved
            
          </button>
        </div>
      </div>
    </section>
  );
};

export default CommunityWork;
import React from 'react';
import { Award, Heart, Palette, Users } from 'lucide-react';

const About: React.FC = () => {
  const achievements = [
    {
      icon: <Palette className="w-6 h-6" />,
      title: "Hyper-Realistic Art",
      description: "Specializing in detailed pencil portraits and storytelling series"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Art Education",
      description: "Teaching individuals and groups, from children to adults"
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Community Impact",
      description: "Regular visits to orphanages and schools for art programs"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Body Painting",
      description: "Creative body art for events, festivals, and photoshoots"
    }
  ];

  return (
    <section id="about" className="py-20 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl font-bold text-stone-900 mb-6">
              About <span className="text-amber-600 italic">Aze Desmond</span>
            </h2>
            
            <div className="space-y-6 text-stone-700 leading-relaxed">
              <p className="text-lg">
                Welcome to my creative world. I'm a passionate hyper-realistic pencil artist 
                dedicated to bringing stories to life through detailed portraiture and artistic expression.
              </p>
              
              <p>
                My journey began with a simple belief: art has the power to connect, heal, and inspire. 
                What started as personal expression has evolved into a mission to share the transformative 
                power of creativity with communities, especially those who need it most.
              </p>
              
              <p>
                Through KiutAze as my brand, I combine my love for hyper-realistic pencil drawings with 
                community service and education, visiting orphanages every month to teach art, and every after two months 
                provide HIV sensitization, and organize creative workshops that bring joy and learning together.
              </p>
              
              <p>
                Whether I'm creating a portrait that captures someone's essence, teaching a child, someone 
                to draw for the first time, or transforming someone through body painting, every 
                piece of work carries the same intention: to celebrate the beauty in our shared humanity.
              </p>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-semibold text-stone-900 mb-4">My Mission</h3>
              <p className="text-stone-700 italic">
                "To use art as a bridge between communities, creating connections that inspire, 
                educate, and transform lives through the power of creativity."
              </p>
            </div>
          </div>

          {/* Achievements Grid */}
          <div className="space-y-8">
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/1153213/pexels-photo-1153213.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Artist at work"
                className="w-full h-64 object-cover rounded-2xl shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-amber-600/20 to-stone-900/20 rounded-2xl"></div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200"
                >
                  <div className="text-amber-600 mb-3">
                    {achievement.icon}
                  </div>
                  <h4 className="font-semibold text-stone-900 mb-2">
                    {achievement.title}
                  </h4>
                  <p className="text-sm text-stone-600">
                    {achievement.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
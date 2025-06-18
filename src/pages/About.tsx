import React from 'react';
import { Award, Heart, Palette, Users, Target, Star } from 'lucide-react';
import { exhibition1 } from '../Image/assets';

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

  const values = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Purpose-Driven Art",
      description: "Every piece I create serves a purpose - whether it's capturing someone's essence, teaching a skill, or bringing communities together."
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Community First",
      description: "Art should be accessible to everyone. I believe in using my skills to give back and create positive change in communities."
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Excellence in Craft",
      description: "I'm committed to continuous learning and pushing the boundaries of what's possible with pencil and paper."
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-12 lg:py-16 bg-gradient-to-br from-stone-900 to-stone-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 lg:mb-6">
              About <span className="text-amber-400 italic">Aze Desmond</span>
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-stone-300 max-w-4xl mx-auto">
              Artist, Educator, Community Builder
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 lg:py-16 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Content */}
            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-stone-900 mb-6">
                My <span className="text-amber-600">Story</span>
              </h2>
              
              <div className="space-y-4 lg:space-y-6 text-stone-700 leading-relaxed">
                <p>
                  Let me start by saying <span className="font-semibold">#pencilnodisleep</span>😊
                </p>
                <p>
                  My journey began with a simple belief in 2019 with me sketching the Paris Tower. From passion to a skill,
                  From a skill to an artist, From an artist to a teacher, From a teacher to a community educator, and finally a multi award winner in arts.
                  : art has the power to connect, heal, and inspire. 
                  What started as personal expression has evolved into a mission to share the transformative 
                  power of creativity with communities, especially those who need it most.
                </p>
                <p>
                  I got my first award in 2020 <span className="font-semibold"> ENYSEM Award</span> for Most Creative Youth, and since then, I have been on 
                  a journey of growth and impact. I have been recognized with multiple awards for my contributions to the arts and community service,
                  including the prestigious <span className="font-semibold"> NBACA Artist of the Year</span> in 2022 and 2024.
                  My work has been featured in exhibitions like the <span className="font-semibold"> APWAL Fest 2021 and 2024</span>, and I have had
                   the honor of collaborating with various organizations
                  to promote art education and community engagement.
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

              <div className="mt-6 lg:mt-8 p-4 lg:p-6 bg-amber-50 rounded-2xl border-l-4 border-amber-600">
                <h3 className="text-lg lg:text-xl font-semibold text-stone-900 mb-3">My Mission</h3>
                <p className="text-stone-700 italic">
                  "To use art as a bridge between communities, creating connections that inspire, 
                  educate, and transform lives through the power of creativity."
                </p>
              </div>
            </div>

            {/* Image */}
            <div className="relative order-first lg:order-last">
              <img
                src={exhibition1}
                alt="Artist at work"
                className="w-full h-64 sm:h-80 lg:h-96 object-cover rounded-2xl shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-amber-600/20 to-stone-900/20 rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 lg:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-stone-900 mb-4">
              What I <span className="text-amber-600">Do</span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-stone-600 max-w-3xl mx-auto">
              My work spans multiple disciplines, all united by a commitment to artistic excellence and community impact.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="bg-stone-50 p-4 lg:p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-200 text-center"
              >
                <div className="text-amber-600 mb-3 lg:mb-4 flex justify-center">
                  {achievement.icon}
                </div>
                <h4 className="font-semibold text-stone-900 mb-2 lg:mb-3 text-sm lg:text-lg">
                  {achievement.title}
                </h4>
                <p className="text-stone-600 text-xs lg:text-base">
                  {achievement.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-12 lg:py-16 bg-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 lg:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-stone-900 mb-4">
              My <span className="text-amber-600">Values</span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-stone-600 max-w-3xl mx-auto">
              The principles that guide my work and define my approach to art and community service.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center bg-white p-6 lg:p-8 rounded-2xl shadow-md">
                <div className="text-amber-600 mb-4 flex justify-center">
                  {value.icon}
                </div>
                <h3 className="text-lg lg:text-xl font-bold text-stone-900 mb-4">{value.title}</h3>
                <p className="text-stone-600 leading-relaxed text-sm lg:text-base">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills & Experience */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-stone-900 mb-6 lg:mb-8">
                Skills & <span className="text-amber-600">Expertise</span>
              </h2>
              
              <div className="space-y-4 lg:space-y-6">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium text-stone-900 text-sm lg:text-base">Hyper-Realistic Pencil Drawing</span>
                    <span className="text-amber-600 font-semibold text-sm lg:text-base">Expert</span>
                  </div>
                  <div className="w-full bg-stone-200 rounded-full h-2">
                    <div className="bg-amber-600 h-2 rounded-full" style={{ width: '90%' }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium text-stone-900 text-sm lg:text-base">Portrait Art</span>
                    <span className="text-amber-600 font-semibold text-sm lg:text-base">Expert</span>
                  </div>
                  <div className="w-full bg-stone-200 rounded-full h-2">
                    <div className="bg-amber-600 h-2 rounded-full" style={{ width: '90%' }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium text-stone-900 text-sm lg:text-base">Body Painting</span>
                    <span className="text-amber-600 font-semibold text-sm lg:text-base">Advanced</span>
                  </div>
                  <div className="w-full bg-stone-200 rounded-full h-2">
                    <div className="bg-amber-600 h-2 rounded-full" style={{ width: '75%' }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium text-stone-900 text-sm lg:text-base">Art Education</span>
                    <span className="text-amber-600 font-semibold text-sm lg:text-base">Advanced</span>
                  </div>
                  <div className="w-full bg-stone-200 rounded-full h-2">
                    <div className="bg-amber-600 h-2 rounded-full" style={{ width: '88%' }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium text-stone-900 text-sm lg:text-base">Community Outreach</span>
                    <span className="text-amber-600 font-semibold text-sm lg:text-base">Expert</span>
                  </div>
                  <div className="w-full bg-stone-200 rounded-full h-2">
                    <div className="bg-amber-600 h-2 rounded-full" style={{ width: '92%' }}></div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-stone-900 mb-6 lg:mb-8">
                <span className="text-amber-600">Experience</span>
              </h2>
              
              <div className="space-y-6 lg:space-y-8">
                <div className="border-l-4 border-green-600 pl-4 lg:pl-6">
                  <div className="text-green-600 font-semibold mb-1 text-sm lg:text-base">2021 - Present</div>
                  <h3 className="text-lg lg:text-xl font-bold text-stone-900 mb-2">Professional Artist & Educator</h3>
                  <p className="text-stone-600 text-sm lg:text-base">
                    Established KiutAze Kreative brand, focusing on hyper-realistic pencil art, 
                    community education, and regular outreach programs.
                  </p>
                </div>

                <div className="border-l-4 border-red-500 pl-4 lg:pl-6">
                  <div className="text-red-500 font-semibold mb-1 text-sm lg:text-base">2022 - Present</div>
                  <h3 className="text-lg lg:text-xl font-bold text-stone-900 mb-2">Community Art Volunteer</h3>
                  <p className="text-stone-600 text-sm lg:text-base">
                    Started volunteering at local orphanages and schools, teaching basic art skills 
                    and organizing creative workshops.
                  </p>
                </div>

                <div className="border-l-4 border-yellow-500 pl-4 lg:pl-6">
                  <div className="text-yellow-500 font-semibold mb-1 text-sm lg:text-base">2019 - Present</div>
                  <h3 className="text-lg lg:text-xl font-bold text-stone-900 mb-2">Developing Artistic Skills</h3>
                  <p className="text-stone-600 text-sm lg:text-base">
                    Focused on mastering hyper-realistic pencil techniques and exploring 
                    body painting as an artistic medium.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
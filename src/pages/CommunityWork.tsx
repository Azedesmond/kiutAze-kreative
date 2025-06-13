import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Users, Palette, Globe, ArrowRight, Calendar, MapPin } from 'lucide-react';
import { CommunityProgram } from '../types';
import { communityservice, communityservice4, communityservice1, communityservice5 } from '../Image/assets';

const CommunityWork: React.FC = () => {
  const programs: CommunityProgram[] = [
    {
      id: '1',
      title: 'Orphanage Art Sessions',
      description: 'Monthly visits teaching art fundamentals to children in local orphanages, fostering creativity and self-expression.',
      imageUrl: communityservice,
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

  const upcomingEvents = [
    {
      title: 'Art Workshop at St. Mary\'s Orphanage',
      date: 'March 15, 2025',
      time: '2:00 PM - 5:00 PM',
      location: 'Bamenda, Cameroon'
    },
    {
      title: 'HIV Awareness & Art Therapy Session',
      date: 'March 28, 2025',
      time: '10:00 AM - 3:00 PM',
      location: 'Community Center, Bamenda'
    },
    {
      title: 'Youth Creative Expression Workshop',
      date: 'April 5, 2025',
      time: '1:00 PM - 4:00 PM',
      location: 'Local School, Bamenda'
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-16 lg:py-20 bg-gradient-to-br from-stone-900 to-stone-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Community <span className="text-amber-400">Impact</span>
            </h1>
            <p className="text-xl lg:text-2xl text-stone-300 max-w-4xl mx-auto">
              Art has the power to heal, connect, and transform communities. Through regular outreach programs, 
              I'm committed to sharing the joy of creativity with those who need it most, creating lasting 
              positive change one pencil stroke and brushstroke at a time.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-stone-50 rounded-2xl p-8 lg:p-12">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-stone-900 mb-6">Our Community Mission</h2>
                <p className="text-stone-600 mb-6 text-lg">
                  Every two months, I visit local orphanages and community centers to conduct art workshops, 
                  HIV sensitization programs, and creative expression sessions. These visits aren't just about 
                  teaching art—they're about building connections, fostering hope, and empowering young minds 
                  through creativity and preaching CHANGE!
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Heart className="w-5 h-5 text-amber-600" />
                    <span className="text-stone-700">Building emotional resilience through art</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Users className="w-5 h-5 text-amber-600" />
                    <span className="text-stone-700">Creating supportive community networks</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Palette className="w-5 h-5 text-amber-600" />
                    <span className="text-stone-700">Fostering creative self-expression</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img
                  src={communityservice4}
                  alt="Community art workshop"
                  className="w-full h-64 lg:h-80 object-cover rounded-xl shadow-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-amber-600/20 to-transparent rounded-xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="py-16 lg:py-20 bg-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-stone-900 mb-4">
              Our <span className="text-amber-600">Impact</span>
            </h2>
            <p className="text-lg lg:text-xl text-stone-600 max-w-3xl mx-auto">
              Numbers that reflect the lives touched and communities transformed through art.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {impactStats.map((stat, index) => (
              <div key={index} className="text-center bg-white rounded-2xl p-6 lg:p-8 shadow-lg">
                <div className="text-amber-600 mb-4 flex justify-center">
                  {stat.icon}
                </div>
                <div className="text-3xl lg:text-4xl font-bold text-stone-900 mb-2">{stat.number}</div>
                <div className="text-stone-600 text-sm lg:text-base">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-stone-900 mb-4">
              Our <span className="text-amber-600">Programs</span>
            </h2>
            <p className="text-lg lg:text-xl text-stone-600 max-w-3xl mx-auto">
              Comprehensive community outreach initiatives designed to create lasting positive impact.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {programs.map((program) => (
              <div key={program.id} className="bg-stone-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <img
                  src={program.imageUrl}
                  alt={program.title}
                  className="w-full h-48 lg:h-56 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl lg:text-2xl font-bold text-stone-900 mb-3">{program.title}</h3>
                  <p className="text-stone-600 mb-4">{program.description}</p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-4 h-4 text-amber-600" />
                      <span className="text-stone-700">{program.location}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4 text-amber-600" />
                      <span className="text-stone-700">{program.date}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 lg:py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-stone-900 mb-4">
              Upcoming <span className="text-amber-600">Events</span>
            </h2>
            <p className="text-lg lg:text-xl text-stone-600 max-w-3xl mx-auto">
              Join us at our next community outreach events and be part of the positive change.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {upcomingEvents.map((event, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg">
                <h3 className="text-xl font-bold text-stone-900 mb-4">{event.title}</h3>
                <div className="space-y-3 text-stone-600">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4 text-amber-600" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Globe className="w-4 h-4 text-amber-600" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4 text-amber-600" />
                    <span>{event.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 lg:py-20 bg-gradient-to-r from-amber-600 to-amber-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Join Our Community Mission
          </h2>
          <p className="text-lg lg:text-xl text-amber-100 mb-8 max-w-2xl mx-auto">
            Want to support our community outreach programs or partner with us for your organization? 
            Let's work together to bring the transformative power of art to more communities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center space-x-2 bg-white text-amber-600 px-8 py-4 rounded-lg font-semibold hover:bg-stone-100 transition-colors duration-200"
            >
              <span>Get Involved</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center space-x-2 border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-amber-600 transition-all duration-200"
            >
              <span>Learn More</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CommunityWork;
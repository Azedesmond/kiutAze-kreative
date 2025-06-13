import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, Users, Star, BookOpen, ArrowRight } from 'lucide-react';
import { Testimonial } from '../types';
import { artclass3 } from '../Image/assets';

const ArtClasses: React.FC = () => {
  const classTypes = [
    {
      title: 'Individual Sessions',
      description: 'One-on-one personalized art instruction tailored to your skill level and goals.',
      duration: '2 hours',
      groupSize: '1 student',
      price: 'Custom pricing',
      features: [
        'Personalized curriculum',
        'Flexible scheduling',
        'Individual attention',
        'Progress tracking'
      ]
    },
    {
      title: 'Group Classes',
      description: 'Small group sessions that foster creativity and peer learning in a supportive environment.',
      duration: '2.5 hours',
      groupSize: '3-6 students',
      price: 'Group rates available',
      features: [
        'Collaborative learning',
        'Peer feedback',
        'Group projects',
        'Social interaction'
      ]
    },
    {
      title: 'Children\'s Programs',
      description: 'Age-appropriate art education designed to nurture young creativity and artistic expression.',
      duration: '1.5 hours',
      groupSize: '4-8 children',
      price: 'Special rates',
      features: [
        'Age-appropriate techniques',
        'Fun and engaging',
        'Creativity development',
        'Confidence building'
      ]
    }
  ];

  const testimonials: Testimonial[] = [
    {
      id: '1',
      name: 'Kah Sharin Mbapeh',
      message: 'The individual sessions have transformed my drawing skills. The personalized approach really helped me overcome my artistic blocks.',
      course: 'Individual Sessions'
    },
    {
      id: '2',
      name: 'Hannah Serah',
      message: 'My two daughters love the children\'s program! They\'ve gained so much confidence and their creativity has flourished. Their paper art skills have upscaled drastically. Thank you for doing what you do.',
      course: 'Children\'s Program'
    },
    {
      id: '3',
      name: 'Fountsi Arts',
      message: 'The group classes are amazing. Learning alongside others has been so inspiring and motivating.',
      course: 'Group Classes'
    }
  ];

  const curriculum = [
    {
      level: 'Beginner',
      topics: ['Basic pencil techniques', 'Understanding proportions', 'Shading fundamentals', 'Simple portraits'],
      duration: '4-6 weeks'
    },
    {
      level: 'Intermediate',
      topics: ['Advanced shading', 'Texture techniques', 'Detailed portraits', 'Composition skills'],
      duration: '6-8 weeks'
    },
    {
      level: 'Advanced',
      topics: ['Hyper-realistic techniques', 'Complex compositions', 'Personal style development', 'Portfolio creation'],
      duration: '8-12 weeks'
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-16 lg:py-20 bg-gradient-to-br from-stone-900 to-stone-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Art <span className="text-amber-400">Classes</span>
            </h1>
            <p className="text-xl lg:text-2xl text-stone-300 max-w-4xl mx-auto">
              Learn the art of hyper-realistic pencil drawing through personalized instruction. 
              Whether you're a beginner or looking to refine your skills, I offer classes 
              tailored to your learning style and artistic goals.
            </p>
          </div>
        </div>
      </section>

      {/* Teaching Philosophy */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-stone-50 rounded-2xl p-8 lg:p-12">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-stone-900 mb-6">My Teaching Approach</h2>
                <p className="text-stone-600 mb-6 text-lg">
                  I believe every person has unique creative potential waiting to be unlocked. 
                  My teaching method combines technical skill development with artistic expression, 
                  ensuring students not only learn proper techniques but also discover their own artistic voice.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <BookOpen className="w-5 h-5 text-amber-600" />
                    <span className="text-stone-700">Structured learning progression</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Users className="w-5 h-5 text-amber-600" />
                    <span className="text-stone-700">Supportive learning environment</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Star className="w-5 h-5 text-amber-600" />
                    <span className="text-stone-700">Individual attention and feedback</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img
                  src={artclass3}
                  alt="Art class in session"
                  className="w-full h-64 lg:h-80 object-cover rounded-xl shadow-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-amber-600/20 to-transparent rounded-xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Class Types */}
      <section className="py-16 lg:py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-stone-900 mb-4">
              Class <span className="text-amber-600">Options</span>
            </h2>
            <p className="text-lg lg:text-xl text-stone-600 max-w-3xl mx-auto">
              Choose the learning format that works best for you and your schedule.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {classTypes.map((classType, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <h3 className="text-xl lg:text-2xl font-bold text-stone-900 mb-4">{classType.title}</h3>
                <p className="text-stone-600 mb-6">{classType.description}</p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center space-x-2 text-stone-700">
                    <Clock className="w-4 h-4 text-amber-600" />
                    <span className="text-sm">{classType.duration}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-stone-700">
                    <Users className="w-4 h-4 text-amber-600" />
                    <span className="text-sm">{classType.groupSize}</span>
                  </div>
                </div>

                <div className="border-t border-stone-200 pt-6 mb-6">
                  <h4 className="font-semibold text-stone-900 mb-3">What's Included:</h4>
                  <ul className="space-y-2">
                    {classType.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2 text-sm text-stone-600">
                        <div className="w-1.5 h-1.5 bg-amber-600 rounded-full"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="text-center">
                  <div className="text-lg font-semibold text-amber-600 mb-4">{classType.price}</div>
                  <Link
                    to="/contact"
                    className="w-full bg-amber-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-amber-700 transition-colors duration-200 inline-block text-center"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-stone-900 mb-4">
              Learning <span className="text-amber-600">Path</span>
            </h2>
            <p className="text-lg lg:text-xl text-stone-600 max-w-3xl mx-auto">
              Structured curriculum designed to take you from beginner to advanced artist.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {curriculum.map((level, index) => (
              <div key={index} className="bg-stone-50 rounded-2xl p-6 lg:p-8">
                <h3 className="text-xl lg:text-2xl font-bold text-stone-900 mb-4">{level.level}</h3>
                <div className="text-amber-600 font-medium mb-4">{level.duration}</div>
                <ul className="space-y-3">
                  {level.topics.map((topic, topicIndex) => (
                    <li key={topicIndex} className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-amber-600 rounded-full mt-2"></div>
                      <span className="text-stone-700">{topic}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 lg:py-20 bg-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-stone-900 mb-4">
              What Students <span className="text-amber-600">Say</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg">
                <div className="mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-amber-400 inline-block" fill="currentColor" />
                  ))}
                </div>
                <p className="text-stone-600 mb-6 italic">"{testimonial.message}"</p>
                <div>
                  <div className="font-semibold text-stone-900">{testimonial.name}</div>
                  <div className="text-sm text-amber-600">{testimonial.course}</div>
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
            Ready to Start Your Artistic Journey?
          </h2>
          <p className="text-lg lg:text-xl text-amber-100 mb-8 max-w-2xl mx-auto">
            Join hundreds of students who have discovered their artistic potential through personalized instruction and supportive guidance.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center space-x-2 bg-white text-amber-600 px-8 py-4 rounded-lg font-semibold hover:bg-stone-100 transition-colors duration-200"
          >
            <span>Enroll Today</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ArtClasses;
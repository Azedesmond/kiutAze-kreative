import React, { useState } from 'react';
import { Mail, Phone, MapPin, Instagram, Facebook, MessageCircle, Send, Clock, CheckCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSending, setIsSending] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);

    try {
      // Create mailto link with form data
      const subject = encodeURIComponent(`${formData.subject} - ${formData.name}`);
      const body = encodeURIComponent(`Name: ${formData.name}
Email: ${formData.email}
Subject: ${formData.subject}

Message:
${formData.message}

---
Sent from KiutAze Kreative Contact Form`);
      
      const mailtoLink = `mailto:kiutaze237@gmail.com?subject=${subject}&body=${body}`;
      window.location.href = mailtoLink;
      
      // Show success message
      alert('Thank you for your message! Your email client will open to send the message. I\'ll get back to you soon.');
      
      // Reset form
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch {
      alert('There was an error processing your message. Please try again or contact me directly.');
    } finally {
      setIsSending(false);
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: 'Email',
      value: 'kiutaze237@gmail.com',
      href: 'mailto:kiutaze237@gmail.com'
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: 'Phone',
      value: '+237 650 058 024',
      href: 'tel:+237650058024'
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: 'Location',
      value: 'Bamenda, Cameroon',
      href: 'https://maps.app.goo.gl/dUpeyhQ4aZMx7wuc7'
    }
  ];

  const socialLinks = [
    {
      icon: <Instagram className="w-6 h-6" />,
      label: 'Instagram',
      href: 'https://www.instagram.com/kiutaze/profilecard/?igsh=d3l5M3hodHNsZHRl',
      color: 'hover:text-pink-500'
    },
    {
      icon: <Facebook className="w-6 h-6" />,
      label: 'Facebook',
      href: 'https://www.facebook.com/kiutAze',
      color: 'hover:text-blue-500'
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      label: 'WhatsApp',
      href: 'https://wa.link/iyy9wa',
      color: 'hover:text-green-500'
    }
  ];

  const subjects = [
    'Art Commission',
    'Art Classes',
    'Body Painting Services',
    'Community Partnership',
    'General Inquiry'
  ];

  const faqs = [
    {
      question: 'How long does a custom portrait take?',
      answer: 'Typical turnaround time is 4 days to 4 weeks depending on the size and complexity of the piece.'
    },
    {
      question: 'Do you offer online art classes?',
      answer: 'Yes, I do offer online art classes. I focus on in-person classes to provide the best learning experience, but I can arrange online sessions if needed.'
    },
    {
      question: 'Can you travel for community workshops?',
      answer: 'Yes, I can travel within and outside Cameroon for community workshops and educational programs. Contact me for details.'
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-12 lg:py-16 bg-gradient-to-br from-stone-900 to-stone-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 lg:mb-6">
              Get In <span className="text-amber-400">Touch</span>
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-stone-300 max-w-4xl mx-auto">
              Ready to start your artistic journey, commission a piece, or collaborate on a community project? 
              I'd love to hear from you. Let's create something beautiful together.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-12 lg:py-16 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg">
              <h2 className="text-2xl lg:text-3xl font-bold text-stone-900 mb-6">Send Me a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4 lg:gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-stone-700 mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200"
                      placeholder="Enter your full name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-stone-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-stone-700 mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200"
                  >
                    <option value="">Select a subject</option>
                    {subjects.map((subject) => (
                      <option key={subject} value={subject}>
                        {subject}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-stone-700 mb-2">
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200 resize-vertical"
                    placeholder="Tell me about your project, questions, or how I can help you..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSending}
                  className="w-full bg-amber-600 text-white py-4 px-6 rounded-lg font-semibold hover:bg-amber-700 transition-colors duration-200 flex items-center justify-center space-x-2 disabled:opacity-50"
                >
                  <Send className="w-5 h-5" />
                  <span>{isSending ? 'Sending...' : 'Send Message'}</span>
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-6 lg:space-y-8">
              {/* Contact Details */}
              <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-stone-900 mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <a
                      key={index}
                      href={info.href}
                      className="flex items-center space-x-4 text-stone-700 hover:text-amber-600 transition-colors duration-200"
                    >
                      <div className="text-amber-600">
                        {info.icon}
                      </div>
                      <div>
                        <div className="font-medium">{info.label}</div>
                        <div className="text-stone-600">{info.value}</div>
                      </div>
                    </a>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-stone-200">
                  <h4 className="font-semibold text-stone-900 mb-4">Follow My Work</h4>
                  <div className="flex space-x-4">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.href}
                        className={`text-stone-400 ${social.color} transition-colors duration-200`}
                        aria-label={social.label}
                      >
                        {social.icon}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Response Time */}
              <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 lg:p-8">
                <div className="flex items-center space-x-3 mb-4">
                  <Clock className="w-6 h-6 text-amber-600" />
                  <h4 className="font-semibold text-amber-800">Response Time</h4>
                </div>
                <p className="text-amber-700">
                  I typically respond to all inquiries within 24-48 hours. For urgent matters, 
                  please call directly.
                </p>
              </div>

              {/* Quick Info Cards */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4">
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 lg:p-6">
                  <h4 className="font-semibold text-blue-800 mb-2">Commission Work</h4>
                  <p className="text-blue-700 text-sm">
                    Custom portraits and artworks available. Typical turnaround time is 4 days - 4 weeks.
                  </p>
                </div>
                
                <div className="bg-green-50 border border-green-200 rounded-xl p-4 lg:p-6">
                  <h4 className="font-semibold text-green-800 mb-2">Art Classes</h4>
                  <p className="text-green-700 text-sm">
                    Individual and group sessions available. Flexible scheduling.
                  </p>
                </div>
                
                <div className="bg-purple-50 border border-purple-200 rounded-xl p-4 lg:p-6 sm:col-span-2 lg:col-span-1 xl:col-span-2">
                  <h4 className="font-semibold text-purple-800 mb-2">Community Programs</h4>
                  <p className="text-purple-700 text-sm">
                    Partner with us for community outreach, school programs, or organizational workshops.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 lg:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-stone-900 mb-4">
              Frequently Asked <span className="text-amber-600">Questions</span>
            </h2>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-stone-50 rounded-2xl p-6 lg:p-8">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-amber-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-stone-900 mb-2">{faq.question}</h3>
                    <p className="text-stone-600">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
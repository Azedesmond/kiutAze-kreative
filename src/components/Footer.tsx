import React from 'react';
import { Link } from 'react-router-dom';
import { Palette, Instagram, Facebook, MessageCircle, Mail, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { label: 'Home', path: '/home' },
    { label: 'About', path: '/about' },
    { label: 'Portfolio', path: '/portfolio' },
    { label: 'Art Classes', path: '/art-classes' },
    { label: 'Community Work', path: '/community-work' },
    { label: 'Contact', path: '/contact' }
  ];

  const socialLinks = [
    { icon: <Instagram className="w-5 h-5" />, href: 'https://www.instagram.com/kiutaze/profilecard/?igsh=d3l5M3hodHNsZHRl', label: 'Instagram' },
    { icon: <Facebook className="w-5 h-5" />, href: 'https://www.facebook.com/kiutAze', label: 'Facebook' },
    { icon: <MessageCircle className="w-5 h-5" />, href: '#', label: 'WhatsApp' },
    { icon: <Mail className="w-5 h-5" />, href: 'mailto:kiutaze237@gmail.com', label: 'Email' }
  ];

  const handleLinkClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-stone-900 text-white py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Palette className="w-8 h-8 text-amber-400" />
              <span className="text-xl lg:text-2xl font-bold">KiutAze Kreative</span>
            </div>
            <p className="text-stone-400 mb-6 max-w-md text-sm lg:text-base">
              Bringing art to life through hyper-realistic pencil drawings, body painting, 
              and community education. Creating connections that inspire and transform lives 
              through the power of creativity.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="text-stone-400 hover:text-amber-400 transition-colors duration-200"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    onClick={handleLinkClick}
                    className="text-stone-400 hover:text-white transition-colors duration-200 text-sm lg:text-base"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-stone-400 text-sm lg:text-base">
              <li>Custom Portraits</li>
              <li>Body Painting</li>
              <li>Art Classes</li>
              <li>Community Workshops</li>
              <li>Art Commissions</li>
              <li>Creative Consultations</li>
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="bg-stone-800 rounded-2xl p-6 lg:p-8 mb-12">
          <div className="text-center">
            <h3 className="text-xl lg:text-2xl font-bold mb-4">Stay Connected</h3>
            <p className="text-stone-400 mb-6 max-w-2xl mx-auto text-sm lg:text-base">
              Get updates on new artworks, upcoming classes, and community events. 
              Join our creative community and never miss an opportunity to grow your artistic journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-stone-700 border border-stone-600 rounded-lg text-white placeholder-stone-400 focus:ring-2 focus:ring-amber-500 focus:border-transparent text-sm lg:text-base"
              />
              <button className="bg-amber-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-amber-700 transition-colors duration-200 text-sm lg:text-base">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-stone-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-stone-400 text-sm lg:text-base">
              © {currentYear} KiutAze Kreative. All rights reserved.
            </div>
            <div className="flex items-center space-x-1 text-stone-400 text-sm lg:text-base">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500" fill="currentColor" />
              <span>for the art community</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
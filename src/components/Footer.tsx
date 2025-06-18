import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Palette, Instagram, Facebook, MessageCircle, Mail, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubscribing, setIsSubscribing] = useState(false);
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
    { icon: <MessageCircle className="w-5 h-5" />, href: 'https://wa.link/iyy9wa', label: 'WhatsApp' },
    { icon: <Mail className="w-5 h-5" />, href: 'mailto:kiutaze237@gmail.com', label: 'Email' }
  ];

  const handleLinkClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-stone-900 text-white py-8 lg:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-3">
              <Palette className="w-7 h-7 text-amber-400" />
              <span className="text-lg lg:text-xl font-bold">KiutAze Kreative</span>
            </div>
            <p className="text-stone-400 mb-4 max-w-md text-sm">
              Bringing art to life through hyper-realistic pencil drawings, body painting, 
              and community education. Creating connections that inspire and transform lives 
              through the power of creativity.
            </p>
            <div className="flex space-x-3">
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
            <h3 className="text-base font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    onClick={handleLinkClick}
                    className="text-stone-400 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-base font-semibold mb-3">Services</h3>
            <ul className="space-y-2 text-stone-400 text-sm">
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
        <div className="bg-stone-800 rounded-xl p-4 lg:p-6 mb-6">
          <div className="text-center">
            <h3 className="text-lg lg:text-xl font-bold mb-2">Stay Connected</h3>
            <p className="text-stone-400 mb-4 max-w-2xl mx-auto text-sm">
              Get updates on new artworks, upcoming classes, and community events.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 px-3 py-2 bg-stone-700 border border-stone-600 rounded-lg text-white placeholder-stone-400 focus:ring-2 focus:ring-amber-500 focus:border-transparent text-sm"
              />
              <button 
                type="submit"
                disabled={isSubscribing}
                className="bg-amber-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-amber-700 transition-colors duration-200 text-sm disabled:opacity-50"
              >
                {isSubscribing ? 'Subscribing...' : 'Subscribe'}
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-stone-800 pt-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
            <div className="text-stone-400 text-sm">
              © {currentYear} KiutAze Kreative. All rights reserved.
            </div>
            <div className="flex items-center space-x-1 text-stone-400 text-sm">
              <span>Made with</span>
              <Heart className="w-3 h-3 text-red-500" fill="currentColor" />
              <span>for the art community</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
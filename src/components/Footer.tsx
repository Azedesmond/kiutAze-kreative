import React from 'react';
import { Palette, Instagram, Facebook, MessageCircle, Mail, Heart } from 'lucide-react';

interface FooterProps {
  onNavigate: (section: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Portfolio', id: 'portfolio' },
    { label: 'Art Classes', id: 'classes' },
    { label: 'Community Work', id: 'community' },
    { label: 'Contact', id: 'contact' }
  ];

  const socialLinks = [
    { icon: <Instagram className="w-5 h-5" />, href: '#', label: 'Instagram' },
    { icon: <Facebook className="w-5 h-5" />, href: '#', label: 'Facebook' },
    { icon: <MessageCircle className="w-5 h-5" />, href: '#', label: 'WhatsApp' },
    { icon: <Mail className="w-5 h-5" />, href: 'mailto:hello@kiutazekreative.com', label: 'Email' }
  ];

  return (
    <footer className="bg-stone-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Palette className="w-8 h-8 text-amber-400" />
              <span className="text-2xl font-bold">KiutAze Kreative</span>
            </div>
            <p className="text-stone-400 mb-6 max-w-md">
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
                <li key={link.id}>
                  <button
                    onClick={() => onNavigate(link.id)}
                    className="text-stone-400 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-stone-400">
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
        <div className="bg-stone-800 rounded-2xl p-8 mb-12">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Stay Connected</h3>
            <p className="text-stone-400 mb-6 max-w-2xl mx-auto">
              Get updates on new artworks, upcoming classes, and community events. 
              Join our creative community and never miss an opportunity to grow your artistic journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-stone-700 border border-stone-600 rounded-lg text-white placeholder-stone-400 focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              />
              <button className="bg-amber-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-amber-700 transition-colors duration-200">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-stone-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-stone-400">
              © {currentYear} KiutAze Kreative. All rights reserved.
            </div>
            <div className="flex items-center space-x-1 text-stone-400">
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
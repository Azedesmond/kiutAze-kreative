import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Artwork } from '../types';

const Portfolio: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedArtwork, setSelectedArtwork] = useState<Artwork | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState<number>(0);

  const categories = [
    { id: 'all', label: 'All Work' },
    { id: 'portraits', label: 'Portraits' },
    { id: 'story-series', label: 'Story Series' },
    { id: 'body-painting', label: 'Body Painting' },
  ];

  const artworks: Artwork[] = [
    {
      id: '1',
      title: 'Portrait of Resilience',
      description: 'A hyper-realistic portrait capturing the strength and determination in the subject\'s eyes.',
      imageUrl: 'https://images.pexels.com/photos/1183992/pexels-photo-1183992.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'portraits',
      year: '2024'
    },
    {
      id: '2',
      title: 'The Elder\'s Wisdom',
      description: 'Detailed pencil work showcasing the character lines that tell a lifetime of stories.',
      imageUrl: 'https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'portraits',
      year: '2024'
    },
    {
      id: '3',
      title: 'Festival Transformation',
      description: 'Body painting artwork created for a cultural festival celebration.',
      imageUrl: 'https://images.pexels.com/photos/1670977/pexels-photo-1670977.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'body-painting',
      year: '2023'
    },
    {
      id: '4',
      title: 'Mother and Child',
      description: 'A touching portrayal of maternal love through hyper-realistic pencil techniques.',
      imageUrl: 'https://images.pexels.com/photos/1179229/pexels-photo-1179229.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'story-series',
      year: '2024'
    },
    {
      id: '5',
      title: 'Tribal Heritage',
      description: 'Body art celebrating traditional African patterns and cultural identity.',
      imageUrl: 'https://images.pexels.com/photos/1674664/pexels-photo-1674664.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'body-painting',
      year: '2023'
    },
    {
      id: '6',
      title: 'The Dreamer',
      description: 'A portrait series exploring the hopes and aspirations of young minds.',
      imageUrl: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'portraits',
      year: '2024'
    }
  ];

  const filteredArtworks = selectedCategory === 'all' 
    ? artworks 
    : artworks.filter(artwork => artwork.category === selectedCategory);

  const openLightbox = (artwork: Artwork) => {
    setSelectedArtwork(artwork);
    setLightboxIndex(filteredArtworks.findIndex(a => a.id === artwork.id));
  };

  const closeLightbox = () => {
    setSelectedArtwork(null);
  };

  const navigateLightbox = (direction: 'prev' | 'next') => {
    const newIndex = direction === 'prev' 
      ? (lightboxIndex - 1 + filteredArtworks.length) % filteredArtworks.length
      : (lightboxIndex + 1) % filteredArtworks.length;
    
    setLightboxIndex(newIndex);
    setSelectedArtwork(filteredArtworks[newIndex]);
  };

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-stone-900 mb-4">
            My <span className="text-amber-600">Portfolio</span>
          </h2>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto">
            A collection of hyper-realistic pencil drawings, body painting artworks, 
            and creative pieces that tell stories and capture the essence of humanity.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                selectedCategory === category.id
                  ? 'bg-amber-600 text-white shadow-lg'
                  : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Artwork Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArtworks.map((artwork) => (
            <div
              key={artwork.id}
              className="group cursor-pointer"
              onClick={() => openLightbox(artwork)}
            >
              <div className="relative overflow-hidden rounded-2xl shadow-lg group-hover:shadow-2xl transition-all duration-300">
                <img
                  src={artwork.imageUrl}
                  alt={artwork.title}
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-6 left-6 text-white">
                    <h3 className="text-xl font-semibold mb-2">{artwork.title}</h3>
                    <p className="text-stone-200 text-sm mb-1">{artwork.year}</p>
                    <span className="inline-block bg-amber-600 text-white text-xs px-2 py-1 rounded-full">
                      {categories.find(cat => cat.id === artwork.category)?.label}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedArtwork && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl w-full max-h-full">
              {/* Close Button */}
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 z-10 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors duration-200"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Navigation Buttons */}
              {filteredArtworks.length > 1 && (
                <>
                  <button
                    onClick={() => navigateLightbox('prev')}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors duration-200"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    onClick={() => navigateLightbox('next')}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors duration-200"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </>
              )}

              {/* Image and Details */}
              <div className="bg-white rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={selectedArtwork.imageUrl}
                  alt={selectedArtwork.title}
                  className="w-full h-96 md:h-[500px] object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-stone-900 mb-2">
                    {selectedArtwork.title}
                  </h3>
                  <p className="text-stone-600 mb-4">{selectedArtwork.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-stone-500">{selectedArtwork.year}</span>
                    <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm">
                      {categories.find(cat => cat.id === selectedArtwork.category)?.label}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;
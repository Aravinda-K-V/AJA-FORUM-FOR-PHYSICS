import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const Reviews = () => {
  const [currentReview, setCurrentReview] = useState(0);

  const reviews = [
    {
      name: 'Prerana',
      role: 'ENGINEERING STUDENT',
      image: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 5,
      text: 'AJA Physics Academy transformed my understanding . The interactive animations made complex concepts crystal clear. Professor Nandisha sir and Pallavi mam teaching style is exceptional!'
    },
    {
      name: 'Aimen',
      role: 'PU Student',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 5,
      text: 'The electromagnetic theory course was incredible!The faculty really knows how to make learning fun and engaging.'
    },
    {
      name: 'Lakshmi M',
      role: '10th student',
      image: 'https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 5,
      text: "I am a 10th standard student and I had the opportunity to learn from Nandisha Sir for my Olympiad exam. His way of teaching made even tough concepts very simple to understand. Because of his guidance, I was able to gain confidence and perform well in the Olympiad. I am really thankful to him for all the support and motivation."
    },
    {
      name: 'Raghavendra',
      role: 'Engineering Student',
      image: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 5,
      text: 'The classical mechanics course laid a solid foundation for my engineering studies. The projectile motion topics were particularly helpful for understanding real-world applications.'
    }
  ];

useEffect(() => {
  const interval = setInterval(() => {
    setCurrentReview((prev) => (prev + 1) % reviews.length);
  }, 5000);

  return () => clearInterval(interval);
}, [reviews.length]);


  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-800 to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            What Our Students Say
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover how AJA FORUM FOR PHYSICS has transformed the learning experience 
            for thousands of students worldwide.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentReview}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5 }}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-8 md:p-12 border border-white/20 relative"
            >
              <Quote className="absolute top-6 left-6 w-8 h-8 text-cyan-400/50" />
              
              <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8">
                <div className="flex-shrink-0">
                  <img
                    src={reviews[currentReview].image}
                    alt={reviews[currentReview].name}
                    className="w-24 h-24 rounded-full object-cover border-4 border-cyan-400/50"
                  />
                </div>
                
                <div className="flex-grow text-center md:text-left">
                  <div className="flex justify-center md:justify-start mb-4">
                    {[...Array(reviews[currentReview].rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6 italic">
                    "{reviews[currentReview].text}"
                  </p>
                  
                  <div>
                    <h4 className="text-xl font-bold text-white">{reviews[currentReview].name}</h4>
                    <p className="text-cyan-400">{reviews[currentReview].role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="flex justify-center items-center space-x-4 mt-8">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prevReview}
              className="bg-white/10 hover:bg-white/20 border border-white/20 rounded-full p-3 transition-colors"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </motion.button>

            <div className="flex space-x-2">
              {reviews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentReview(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentReview ? 'bg-cyan-400' : 'bg-white/30'
                  }`}
                />
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={nextReview}
              className="bg-white/10 hover:bg-white/20 border border-white/20 rounded-full p-3 transition-colors"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </motion.button>
          </div>
        </div>

        {/* Overall Rating */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-cyan-500/20 to-purple-600/20 backdrop-blur-md rounded-xl p-8 inline-block border border-white/20">
            <div className="flex items-center justify-center space-x-2 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-8 h-8 text-yellow-400 fill-current" />
              ))}
            </div>
            <p className="text-3xl font-bold text-white mb-2">4.9/5</p>
            <p className="text-gray-300">Average rating from 100+ students</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Reviews;
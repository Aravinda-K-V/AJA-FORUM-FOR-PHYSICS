import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Target, Award, Users, BookOpen, Zap, Atom } from 'lucide-react';

const About = () => {
  const [selectedCard, setSelectedCard] = useState<string | null>(null);

  const stats = [
    { icon: Users, value: '100+', label: 'Active Students' },
    { icon: Award, value: '95%', label: 'Positive Reviews' },
    { icon: Target, value: '98%', label: 'Success Rate' }
  ];

  const values = [
    {
      title: 'Excellence in Education',
      description: 'We maintain the highest standards in physics education with cutting-edge curriculum and world-class faculty.',
      icon: Award
    },
    {
      title: 'Innovation & Research',
      description: 'Our commitment to pushing the boundaries of physics education through innovative teaching methods.',
      icon: Target
    },
    {
      title: 'Global Community',
      description: 'Building a worldwide network of physics enthusiasts and future scientists.',
      icon: Users
    },
    {
      title: 'Student Success',
      description: 'Dedicated to helping every student achieve their full potential in physics and beyond.',
      icon: Users
    }
  ];

  const tuitionCards = [
    {
      title: '10th Grade',
      icon: BookOpen,
      importance: 'Strong foundation in physics for competitive exams and future studies.',
      instituteRole: 'We provide structured lessons, practice sessions, and doubt clearing for concept mastery.'
    },
    {
      title: 'PU Board',
      icon: BookOpen,
      importance: 'Builds a strong understanding of physics concepts for Pre-University exams.',
      instituteRole: 'We offer detailed theory, practical sessions, and doubt-clearing to excel in PU Board exams.'
    },
    {
      title: 'Olympiad',
      icon: Award,
      importance: 'Encourages critical thinking, problem-solving skills, and deeper understanding.',
      instituteRole: 'We train students with challenging problems, mock tests, and expert guidance to excel.'
    },
    {
      title: 'NEET',
      icon: Atom,
      importance: 'Covers crucial concepts in Physics for medical entrance exams.',
      instituteRole: 'We offer rigorous coaching with focused theory, practice tests, and doubt-clearing sessions.'
    },
    {
      title: 'JEE',
      icon: Zap,
      importance: 'Prepares students for engineering entrance exams with in-depth physics concepts.',
      instituteRole: 'We provide step-by-step problem-solving methods, mock tests, and personalized guidance.'
    },
    {
      title: 'CET',
      icon: Target,
      importance: 'Focuses on state-level engineering entrance requirements.',
      instituteRole: 'We train students with conceptual clarity, practice questions, and test strategies for CET.'
    }
  ];

  return (
    <>
      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-br from-gray-800 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              About AJA FORUM FOR PHYSICS
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Founded with a vision to make physics accessible and exciting for everyone, AJA Physics Academy 
              has been at the forefront of innovative physics education for over a decade. We believe that 
              understanding the fundamental laws of nature is key to shaping the future of humanity.
            </p>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-20"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, y: -5 }}
                className="text-center bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20"
              >
                <stat.icon className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-3xl font-bold text-white mb-2"
                >
                  {stat.value}
                </motion.div>
                <p className="text-gray-300">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Mission & Vision */}
          <div className="grid md:grid-cols-2 gap-12 mb-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-cyan-500/20 to-cyan-600/10 backdrop-blur-md rounded-xl p-8 border border-cyan-400/30"
            >
              <h3 className="text-2xl font-bold text-cyan-400 mb-4">Our Mission</h3>
              <p className="text-gray-300 leading-relaxed">
                To democratize physics education by providing world-class, accessible learning experiences 
                that inspire curiosity, foster critical thinking, and prepare students for careers in 
                science, technology, and research. We strive to make complex physics concepts 
                understandable and engaging for learners at all levels.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-purple-500/20 to-purple-600/10 backdrop-blur-md rounded-xl p-8 border border-purple-400/30"
            >
              <h3 className="text-2xl font-bold text-purple-400 mb-4">Our Vision</h3>
              <p className="text-gray-300 leading-relaxed">
                To be the leading global platform for physics education, recognized for innovation, 
                excellence, and impact. We envision a world where every curious mind has access to 
                high-quality physics education, contributing to scientific advancement and 
                technological progress for the betterment of humanity.
              </p>
            </motion.div>
          </div>

          {/* Core Values */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <h3 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Our Core Values
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="bg-gradient-to-r from-cyan-500 to-purple-600 p-3 rounded-lg">
                      <value.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white mb-2">{value.title}</h4>
                      <p className="text-gray-300">{value.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tuition / Coaching Section */}
      <section id="tuition" className="py-16 bg-gray-800 text-center relative overflow-hidden">
        {/* Floating GIF Background */}
        <motion.img
          src="https://cdn.dribbble.com/users/342629/screenshots/4267441/pendulum_swing_2.gif"
          alt="Space Animation"
          className="absolute top-0 left-0 w-full h-full object-cover opacity-30 pointer-events-none"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-yellow-400 to-red-500 bg-clip-text text-transparent">
            Tuition / Coaching
          </h2>
          <p className="text-lg text-gray-200 max-w-3xl mx-auto">
            Personalized guidance by <span className="font-semibold text-cyan-400">OUR EXPERTISED FACULTIES</span> for various exams.
          </p>
        </motion.div>

        {/* Rounded container with hover cards */}
        <div className="relative z-10 max-w-6xl mx-auto bg-gray-900/80 rounded-3xl p-6 md:p-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tuitionCards.map((card) => (
            <motion.div
              key={card.title}
              whileHover={{ scale: 1.05, y: -3 }}
              className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20 cursor-pointer relative"
              onClick={() => setSelectedCard(selectedCard === card.title ? null : card.title)}
            >
              <div className="flex flex-col items-center space-y-4">
                <card.icon className="w-10 h-10 text-yellow-400" />
                <h3 className="text-xl font-bold text-white">{card.title}</h3>
              </div>

              <AnimatePresence>
                {selectedCard === card.title && (
                  <motion.div
                    initial={{ opacity: 0, y: 20, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 20, scale: 0.95 }}
                    transition={{ duration: 0.5 }}
                    className="mt-4 text-left text-gray-300 bg-gray-900/50 p-4 rounded-lg border border-gray-700"
                  >
                    <p className="mb-2">
                      <span className="font-semibold text-cyan-400">Importance:</span> {card.importance}
                    </p>
                    <p>
                      <span className="font-semibold text-cyan-400">Our Approach:</span> {card.instituteRole}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
};

export default About;

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Zap, Atom, Waves } from 'lucide-react';

const Courses = () => {
  const [flippedCard, setFlippedCard] = useState<number | null>(null);

  const courses = [
    {
      title: 'Quantum Mechanics Fundamentals',
      image: 'https://cdn.britannica.com/50/190450-131-527BAEF7.jpg',
      icon: Atom,
      description: 'Dive deep into the quantum world and understand the fundamental principles that govern atomic and subatomic particles.',
      topics: ['Wave-Particle Duality', 'Schrödinger Equation', 'Quantum Entanglement', 'Heisenberg Principle'],
      instructor: 'NANDISHA BEVKAL',
      quote: 'Unlock the mysteries of the quantum realm.'
    },
    {
      title: 'Classical Mechanics',
      image:'https://cdn.britannica.com/10/7710-050-C2D756A7/Newton-prism-experiment-1666.jpg',
      icon: Zap,
      description: 'Master the fundamental principles of motion, forces, and energy in classical physics systems.',
      topics: ['Newton\'s Laws', 'Energy Conservation', 'Rotational Motion', 'Oscillations'],
      instructor: 'NANDISHA BEVKAL',
      quote: 'Understand motion, master the universe.'
    },
    {
      title: 'Electromagnetic Theory',
      image: 'https://images.pexels.com/photos/256262/pexels-photo-256262.jpeg?auto=compress&cs=tinysrgb&w=400',
      icon: Waves,
      description: 'Explore the fascinating world of electric and magnetic fields and their interactions.',
      topics: ['Maxwell\'s Equations', 'Electromagnetic Waves', 'Field Theory', 'Applications'],
      instructor: 'KARTHIK N',
      quote: 'Where electricity meets magnetism.'
    },
    {
      title: 'Magnetic Theory',
      image: 'https://cdn.mos.cms.futurecdn.net/xSoberZUiEamaySkdwSV3U.jpg',
      icon: BookOpen,
      description: 'Learn about magnetic fields, forces, and their applications in modern technology.',
      topics: ['Magnetic Fields', 'Electromagnets', 'Lorentz Force', 'Magnetic Materials'],
      instructor: 'KARTHIK N',
      quote: 'Feel the invisible force around you.'
    },
    {
      title: 'Thermodynamics',
      image: 'https://unifyphysics.com/wp-content/uploads/2024/03/Second-Law-of-Thermodynamics.jpg',
      icon: Zap,
      description: 'Understand heat, temperature, and energy transfer in various physical systems.',
      topics: ['Laws of Thermodynamics', 'Entropy', 'Heat Engines', 'Statistical Mechanics'],
      instructor: 'MADHU',
      quote: 'Energy governs all transformations.'
    },
    {
      title: 'Nuclear Physics',
      image: 'https://static.vecteezy.com/system/resources/thumbnails/046/254/844/small_2x/abstract-colorful-microscopic-structure-of-cells-neurons-veins-splash-circulation-lines-microorganisms-micro-dimensions-free-photo.jpg',
      icon: Atom,
      description: 'Explore the atomic nucleus, radioactivity, and nuclear reactions.',
      topics: ['Nuclear Structure', 'Radioactive Decay', 'Nuclear Reactions', 'Applications'],
      instructor: 'PALLAVI M B',
      quote: 'Unlock the power within the atom.'
    }
  ];

  return (
    <section id="courses" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Physics Courses
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore our physics courses designed to take you from fundamental concepts to advanced theories.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative h-96 [perspective:1000px] cursor-pointer"
              onMouseEnter={() => setFlippedCard(index)}
              onMouseLeave={() => setFlippedCard(null)}
            >
              <div
                className={`relative h-full w-full transition-transform duration-700 [transform-style:preserve-3d] ${
                  flippedCard === index ? '[transform:rotateY(180deg)]' : ''
                }`}
              >
                {/* Front of card */}
                <div className="absolute inset-0 h-full w-full [backface-visibility:hidden] rounded-xl overflow-hidden bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/20">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
                    <div className="absolute top-4 right-4">
                      <course.icon className="w-8 h-8 text-cyan-400" />
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-white">{course.title}</h3>
                    <p className="text-gray-300 italic mb-4">"{course.description}"</p> {/* Definition under title */}
                  </div>
                </div>

                {/* Back of card */}
                <div className="absolute inset-0 h-full w-full [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-xl overflow-hidden bg-gradient-to-br from-cyan-500/20 to-purple-600/20 backdrop-blur-md border border-white/20">
                  <div className="p-6 h-full flex flex-col">
                    <h3 className="text-xl font-bold mb-3 text-white">{course.title}</h3>
                    <p className="text-gray-300 mb-4 flex-grow">{course.description}</p>
                    
                    <div className="mb-4">
                      <h4 className="text-cyan-400 font-semibold mb-2">Topics Covered:</h4>
                      <ul className="text-sm text-gray-300 space-y-1">
                        {course.topics.map((topic, i) => (
                          <li key={i} className="flex items-center">
                            <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-2"></div>
                            {topic}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="border-t border-white/20 pt-4">
                      <p className="text-sm text-gray-300">Instructor: <span className="text-cyan-400">{course.instructor}</span></p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;

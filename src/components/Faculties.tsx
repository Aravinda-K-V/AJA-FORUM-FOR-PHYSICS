import React from 'react';
import { motion } from 'framer-motion';
import { Award } from 'lucide-react';

const Faculties = () => {
  const faculties = [
    {
      name: 'NANDISHA BEVKAL',
      title: 'Physics Professor',
      image: 'https://i.postimg.cc/JnTZ0qTp/Whats-App-Image-1947-06-24-at-15-07-14.jpg',
      specialization: 'Quantum Mechanics, Theoretical Physics, Modern Physics'
    },
    {
      name: 'Pallavi M B',
      title: 'Physics Expert',
      image: 'https://i.postimg.cc/8CzRhc7K/Whats-App-Image-1947-06-24-at-15-07-15.jpg',
      specialization: 'Fundamental Physics'
    },
    {
      name: 'MADHU',
      title: 'Physics Professor',
      image: 'https://i.postimg.cc/BQZnZKkV/Whats-App-Image-1947-06-24-at-15-07-15-1.jpg',
      specialization: 'Basic Physics'
    },
    {
      name: 'Karthik N',
      title: 'Physics Professor',
      image: 'https://i.postimg.cc/MTjdQH4k/Whats-App-Image-1947-06-24-at-15-07-16.jpg',
      specialization: 'Solid State Physics, Electricity and Magnetism'
    }
  ];

  // Function to calculate tilt based on mouse position
  const calcTransform = (e, card) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const midX = rect.width / 2;
    const midY = rect.height / 2;

    const rotateX = ((y - midY) / midY) * 10;
    const rotateY = ((x - midX) / midX) * -10;
    return { rotateX, rotateY };
  };

  return (
    <section id="faculties" className="py-20 bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Meet Our Expert Faculty
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Learn from world-renowned physicists and researchers who bring decades of experience 
            and cutting-edge knowledge to your learning journey.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {faculties.map((faculty, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/20"
              style={{ transformStyle: "preserve-3d" }}
              onMouseMove={(e) => {
                const card = e.currentTarget;
                const { rotateX, rotateY } = calcTransform(e, card);
                card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "rotateX(0deg) rotateY(0deg) scale(1)";
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative p-6">
                <div className="relative mb-4">
                  {/* Glow effect wrapper */}
                  <div className="relative w-28 h-28 mx-auto">
                    <img
                      src={faculty.image}
                      alt={faculty.name}
                      className="w-28 h-28 rounded-full object-cover border-4 border-cyan-400/50 transition-transform duration-300 group-hover:scale-110 group-hover:shadow-[0_0_25px_rgba(34,211,238,0.8)]"
                    />
                  </div>

                  <div className="absolute -top-2 -right-2 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full p-2">
                    <Award className="w-4 h-4 text-white" />
                  </div>
                </div>

                <h3 className="text-xl font-bold text-center mb-2 text-white">{faculty.name}</h3>
                <p className="text-cyan-400 text-center mb-4">{faculty.title}</p>
                <p className="text-sm text-gray-300 text-center mb-4">{faculty.specialization}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faculties;

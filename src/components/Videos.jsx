import React from "react";
import { motion } from "framer-motion";

export default function Videos() {
  const videoCategories = [
    {
      name: "Classical Mechanics",
      videos: [
        { id: "9qmeMbd16fo", title: "Ohm's Law", description: "Learn about Ohm's Law, the relationship between voltage, current, and resistance." },
        { id: "AmKkka2RvbY", title: "Kirchhoff's Laws", description: "Understand Kirchhoff's Voltage and Current Laws with examples." }
      ]
    },
    {
      name: "Electromagnetism",
      videos: [
        { id: "o8ljqHzBHZY", title: "Magnetic Field Basics", description: "Explore the concept of magnetic fields and their properties." },
        { id: "HiH_eWziPRI", title: "Electromagnetic Induction", description: "Learn how changing magnetic fields induce currents." },
        { id: "shaDHew_mrg", title: "Electric Cell", description: "Learn how Electric cells will work." }
      ]
    },
    {
      name: "Quantum Mechanics",
      videos: [
        { id: "q3oA1J0j2gk", title: "Introduction to Quantum Mechanics", description: "An overview of the fundamental principles of quantum mechanics." },
        { id: "dQmH5Xy8VqA", title: "Wave-Particle Duality", description: "Understanding the dual nature of matter and light." }
      ]
    },
    {
      name: "Relativity",
      videos: [
        { id: "htrG45F6FfE", title: "Drift velocity", description: "A beginner's guide to Einstein's theory of special relativity." },
        { id: "NErPT3tVL0M", title: "Equipotential surface", description: "A beginner's guide to the equipotentail surface." },
        { id: "mt6wzsFdq64", title: "constrain motion in pully system", description: "Exploring the concept of gravity in the framework of general relativity." }
      ]
    }
  ];

  console.log(videoCategories); // check in console: all 11 videos should appear

  return (
    <div className="p-6 pt-16 min-h-screen bg-gray-900 text-white">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Do you need an experience of how our teachers teach? Here we gooooo!!
      </h1>

      {videoCategories.map((category) => (
        <div key={category.name} className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">{category.name}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {category.videos.map((video) => (
              <motion.div
                key={video.id}
                className="bg-gray-800 rounded-xl shadow-lg overflow-hidden p-2"
                whileHover={{ scale: 1.05 }}
              >
                <iframe
                  width="100%"
                  height="200"
                  src={`https://www.youtube.com/embed/${video.id}`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="rounded-lg"
                ></iframe>
                <h3 className="mt-2 font-semibold text-white">{video.title}</h3>
                <p className="text-gray-300 text-sm mt-1">{video.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Map = () => {
  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Visit Our Campus
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Located in the heart of the education district, our state-of-the-art facility 
            provides the perfect environment for learning physics.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              {/* Address */}
              <div className="flex items-start space-x-4">
                <div className="bg-gradient-to-r from-cyan-500 to-purple-600 p-3 rounded-lg">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-1">Address</h4>
                  <p className="text-gray-300">
                    123 Physics Avenue<br />
                    Science District, Tech City 12345<br />
                    United States
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start space-x-4">
                <div className="bg-gradient-to-r from-cyan-500 to-purple-600 p-3 rounded-lg">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-1">Phone</h4>
                  <p className="text-gray-300">+91 7411721571</p>
                  <p className="text-gray-300">+91 9449718899</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-4">
                <div className="bg-gradient-to-r from-cyan-500 to-purple-600 p-3 rounded-lg">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-1">Email</h4>
                  <p className="text-gray-300">ajaaforumforphysics@gmail.com</p>
                </div>
              </div>

              {/* Office Hours */}
              <div className="flex items-start space-x-4">
                <div className="bg-gradient-to-r from-cyan-500 to-purple-600 p-3 rounded-lg">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-1">Office Hours</h4>
                  <p className="text-gray-300">
                    Monday - Friday: 8:00 AM - 8:00 PM<br />
                    Saturday: 9:00 AM - 5:00 PM<br />
                    Sunday: 12:00 PM - 4:00 PM
                  </p>
                </div>
              </div>
            </div>

            {/* Directions Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full mt-8 bg-gradient-to-r from-cyan-500 to-purple-600 text-white py-3 rounded-lg font-semibold"
            >
              Get Directions
            </motion.button>
          </motion.div>

          {/* Interactive Map Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white/10 backdrop-blur-md rounded-xl overflow-hidden border border-white/20"
          >
            <div className="h-96 bg-gradient-to-br from-cyan-500/30 to-purple-600/30 relative">
              {/* Overlay Content */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-16 h-16 text-cyan-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">Interactive Map</h3>
                  <p className="text-gray-300">
                    Click to open in Google Maps<br />
                    AJA Forum for Physics Campus
                  </p>
                  <motion.a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-4 inline-block bg-white/20 hover:bg-white/30 text-white px-6 py-2 rounded-lg font-semibold transition-colors"
                  >
                    Open in Maps
                  </motion.a>
                </div>
              </div>
              
              {/* Fake grid effect */}
              <div className="absolute inset-0 opacity-20">
                <div className="grid grid-cols-8 grid-rows-6 h-full w-full">
                  {[...Array(48)].map((_, i) => (
                    <div key={i} className="border border-white/10"></div>
                  ))}
                </div>
              </div>
            </div>

            {/* Features */}
            <div className="p-6">
              <h4 className="text-lg font-semibold text-white mb-4">Campus Features</h4>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="text-gray-300">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full inline-block mr-2"></span>
                  Research Labs
                </div>
                <div className="text-gray-300">
                  <span className="w-2 h-2 bg-purple-400 rounded-full inline-block mr-2"></span>
                  Library
                </div>
                <div className="text-gray-300">
                  <span className="w-2 h-2 bg-green-400 rounded-full inline-block mr-2"></span>
                  Lecture Halls
                </div>
                <div className="text-gray-300">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full inline-block mr-2"></span>
                  Student Center
                </div>
                <div className="text-gray-300">
                  <span className="w-2 h-2 bg-red-400 rounded-full inline-block mr-2"></span>
                  Observatory
                </div>
                <div className="text-gray-300">
                  <span className="w-2 h-2 bg-pink-400 rounded-full inline-block mr-2"></span>
                  Parking
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Map;

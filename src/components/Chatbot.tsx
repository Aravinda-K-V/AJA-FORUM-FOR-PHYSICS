import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Bot } from 'lucide-react';

interface Message {
  text: string;
  isBot: boolean;
  timestamp: Date;
}

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      text: "Hello! I'm AJA Bot, your physics academy assistant. How can I help you today?",
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');

  const quickResponses = [
    'Course information',
    'Admission process',
    'Faculty details',
    'Tuition fees',
    'Schedule a visit'
  ];

  const botResponses: Record<string, string> = {
    'course information': 'We offer comprehensive courses in Quantum Mechanics, Classical Physics, Electromagnetic Theory, Astrophysics, Thermodynamics, and Nuclear Physics. Each course includes interactive animations and hands-on learning experiences.',
    'admission process': 'Our admission process includes: 1) Online application submission 2) Academic transcript review 3) Physics aptitude test 4) Interview with faculty 5) Final decision within 2 weeks. Application deadline is March 15th.',
    'faculty details': 'Our expert faculty includes Dr. Sarah Johnson (Quantum Physics), Prof. Michael Chen (Nuclear Physics), Dr. Emily Rodriguez (Astrophysics), and Prof. David Kumar (Classical Mechanics). All have 10+ years of teaching experience.',
    'tuition fees': 'Course fees range from $199-$349 depending on the level and duration. We offer flexible payment plans and scholarships for eligible students. Financial aid is available for qualifying applicants.',
    'schedule a visit': 'You can schedule a campus visit Monday-Friday 9AM-5PM. Please call (555) 123-PHYSICS or email visit@ajaphysicsacademy.edu to book your appointment. Virtual tours are also available.',
    'default': "I'm here to help with information about AJA Physics Academy! You can ask me about our courses, admission process, faculty, fees, or scheduling a visit. Is there something specific you'd like to know?"
  };

  const handleSendMessage = (message: string = inputValue) => {
    if (!message.trim()) return;

    const userMessage: Message = {
      text: message,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');

    // Simulate bot response
    setTimeout(() => {
      const lowerMessage = message.toLowerCase();
      let botResponse = botResponses.default;

      for (const [key, response] of Object.entries(botResponses)) {
        if (lowerMessage.includes(key)) {
          botResponse = response;
          break;
        }
      }

      const botMessage: Message = {
        text: botResponse,
        isBot: true,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMessage]);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Floating Button */}
      <motion.button
        initial={{ scale: 0, rotate: 180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ duration: 0.5, delay: 2 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-cyan-500 to-purple-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-shadow"
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </motion.button>

      {/* Chatbot Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-24 right-6 z-40 w-80 h-96 bg-gray-900/95 backdrop-blur-md rounded-xl border border-white/20 shadow-2xl flex flex-col"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-cyan-500 to-purple-600 p-4 rounded-t-xl">
              <div className="flex items-center space-x-2">
                <div className="bg-white/20 p-2 rounded-full">
                  <Bot className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-white">AJA Bot</h3>
                  <p className="text-sm text-white/80">Physics Academy Assistant</p>
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 p-4 overflow-y-auto space-y-4">
              {messages.map((message, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
                >
                  <div
                    className={`max-w-xs p-3 rounded-lg ${
                      message.isBot
                        ? 'bg-white/10 text-white'
                        : 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white'
                    }`}
                  >
                    <p className="text-sm">{message.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Quick Responses */}
            <div className="px-4 pb-2">
              <div className="flex flex-wrap gap-2">
                {quickResponses.slice(0, 2).map((response, index) => (
                  <motion.button
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleSendMessage(response)}
                    className="text-xs bg-white/10 hover:bg-white/20 text-white px-2 py-1 rounded-full transition-colors"
                  >
                    {response}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Input */}
            <div className="p-4 border-t border-white/20">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask me anything..."
                  className="flex-1 bg-white/10 text-white placeholder-gray-400 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
                />
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => handleSendMessage()}
                  disabled={!inputValue.trim()}
                  className="bg-gradient-to-r from-cyan-500 to-purple-600 disabled:opacity-50 disabled:cursor-not-allowed text-white p-2 rounded-lg"
                >
                  <Send className="w-4 h-4" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot;
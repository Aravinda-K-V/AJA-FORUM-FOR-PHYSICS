import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, RotateCcw } from 'lucide-react';

const PhysicsDemo = () => {
  const [activeDemo, setActiveDemo] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const waveCanvasRef = useRef<HTMLCanvasElement>(null);
  const projectileCanvasRef = useRef<HTMLCanvasElement>(null);
  const refractionCanvasRef = useRef<HTMLCanvasElement>(null);
  const pendulumCanvasRef = useRef<HTMLCanvasElement>(null);

  // -------------------- ANIMATIONS --------------------
  // Electromagnetic Wave
  useEffect(() => {
    const canvas = waveCanvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    canvas.width = 500;
    canvas.height =100;
    let time = 0;
    const animate = () => {
      if (!isPlaying && activeDemo === 0) return;
      ctx.fillStyle = 'rgba(17, 24, 39, 1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.strokeStyle = '#00bcd4';
      ctx.lineWidth = 3;
      ctx.beginPath();
      for (let x = 0; x < canvas.width; x++) {
        const y = canvas.height / 2 + 40 * Math.sin((x - time * 5) * 0.02);
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();
      ctx.strokeStyle = '#9c27b0';
      ctx.lineWidth = 3;
      ctx.beginPath();
      for (let x = 0; x < canvas.width; x++) {
        const z = 40 * Math.sin((x - time * 5) * 0.02);
        const y1 = canvas.height / 2 - z;
        const y2 = canvas.height / 2 + z;
        ctx.moveTo(x, canvas.height / 2);
        ctx.lineTo(x, y1);
        ctx.moveTo(x, canvas.height / 2);
        ctx.lineTo(x, y2);
      }
      ctx.stroke();
      time++;
      requestAnimationFrame(animate);
    };
    if (activeDemo === 0) animate();
  }, [activeDemo, isPlaying]);

  // Projectile Motion
  useEffect(() => {
    const canvas = projectileCanvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    canvas.width = 400;
    canvas.height = 200;
    let time = 0;
    const animate = () => {
      if (!isPlaying && activeDemo === 1) return;
      ctx.fillStyle = 'rgba(17, 24, 39, 1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.strokeStyle = '#4ade80';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(0, canvas.height - 20);
      ctx.lineTo(canvas.width, canvas.height - 20);
      ctx.stroke();
      const t = (time % 120) / 10;
      const x = 20 + t * 30;
      const y = canvas.height - 20 - (t * 50 - 0.5 * 9.8 * t * t * 5);
      if (y < canvas.height - 20) {
        ctx.fillStyle = '#f59e0b';
        ctx.beginPath();
        ctx.arc(x, y, 8, 0, Math.PI * 2);
        ctx.fill();
      }
      time++;
      requestAnimationFrame(animate);
    };
    if (activeDemo === 1) animate();
  }, [activeDemo, isPlaying]);

  // Light Refraction
  useEffect(() => {
    const canvas = refractionCanvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    canvas.width = 400;
    canvas.height = 200;
    let time = 0;
    const animate = () => {
      if (!isPlaying && activeDemo === 2) return;
      ctx.fillStyle = 'rgba(17, 24, 39, 1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.strokeStyle = '#ffffff';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(canvas.width / 2, 0);
      ctx.lineTo(canvas.width / 2, canvas.height);
      ctx.stroke();
      ctx.fillStyle = '#ffffff';
      ctx.font = '14px Arial';
      ctx.fillText('Air', 10, 30);
      ctx.fillText('Glass', canvas.width - 50, 30);
      const rayLength = 100;
      const incidentAngle = 0.5 + 0.3 * Math.sin(time * 0.05);
      const refractedAngle = Math.asin(Math.sin(incidentAngle) / 1.5);
      ctx.strokeStyle = '#00bcd4';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(
        canvas.width / 2 - rayLength * Math.cos(incidentAngle),
        canvas.height / 2 - rayLength * Math.sin(incidentAngle)
      );
      ctx.lineTo(canvas.width / 2, canvas.height / 2);
      ctx.stroke();
      ctx.strokeStyle = '#9c27b0';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(canvas.width / 2, canvas.height / 2);
      ctx.lineTo(
        canvas.width / 2 + rayLength * Math.cos(refractedAngle),
        canvas.height / 2 + rayLength * Math.sin(refractedAngle)
      );
      ctx.stroke();
      time++;
      requestAnimationFrame(animate);
    };
    if (activeDemo === 2) animate();
  }, [activeDemo, isPlaying]);

  // Pendulum
  useEffect(() => {
    const canvas = pendulumCanvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    canvas.width = 400;
    canvas.height = 200;
    let time = 0;
    const animate = () => {
      if (!isPlaying && activeDemo === 3) return;
      ctx.fillStyle = 'rgba(17, 24, 39, 1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      const centerX = canvas.width / 2;
      const centerY = 20;
      const length = 120;
      const angle = 0.5 * Math.sin(time * 0.05);
      const bobX = centerX + length * Math.sin(angle);
      const bobY = centerY + length * Math.cos(angle);
      ctx.strokeStyle = '#ffffff';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(centerX, centerY);
      ctx.lineTo(bobX, bobY);
      ctx.stroke();
      ctx.fillStyle = '#f59e0b';
      ctx.beginPath();
      ctx.arc(bobX, bobY, 12, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = '#ffffff';
      ctx.beginPath();
      ctx.arc(centerX, centerY, 4, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = '#00bcd440';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.arc(centerX, centerY, length, 0.5 + Math.PI / 2, 2.64 + Math.PI / 2);
      ctx.stroke();
      time++;
      requestAnimationFrame(animate);
    };
    if (activeDemo === 3) animate();
  }, [activeDemo, isPlaying]);

  // -------------------- DEMOS --------------------
  const demos = [
    { title: 'Electromagnetic Waves', description: 'Electric & magnetic fields oscillating ', canvasRef: waveCanvasRef },
    { title: 'Projectile Motion', description: 'Parabolic trajectory under gravity', canvasRef: projectileCanvasRef },
    { title: 'Light Refraction', description: 'Light bending through media', canvasRef: refractionCanvasRef },
    { title: 'Pendulum Oscillation', description: 'Simple harmonic motion in action', canvasRef: pendulumCanvasRef }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Physics in Motion
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience the beauty of physics through interactive animations and concept boxes.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left side: Concept boxes */}
          <div className="grid grid-cols-2 gap-6 flex-1">
            {demos.map((demo, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-gray-800/80 p-4 rounded-lg border border-white/20 shadow-lg cursor-pointer text-center text-white"
                onClick={() => setActiveDemo(index)}
              >
                <h3 className="font-bold">{demo.title}</h3>
                <p className="text-sm mt-1">{demo.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Right side: Animation */}
          <div className="flex-1 bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-2xl font-bold text-white">{demos[activeDemo].title}</h3>
              <div className="flex space-x-2">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="bg-cyan-500 hover:bg-cyan-600 text-white p-2 rounded-lg transition-colors"
                >
                  {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => {
                    setIsPlaying(false);
                    setTimeout(() => setIsPlaying(true), 100);
                  }}
                  className="bg-purple-500 hover:bg-purple-600 text-white p-2 rounded-lg transition-colors"
                >
                  <RotateCcw className="w-5 h-5" />
                </motion.button>
              </div>
            </div>
            <div className="relative bg-gray-900 rounded-lg overflow-hidden">
              {demos[activeDemo].canvasRef && (
                <canvas
                  ref={demos[activeDemo].canvasRef}
                  className="w-full h-auto"
                  style={{ display: 'block' }}
                />
              )}
            </div>
            <p className="text-gray-300 mt-4 text-center">{demos[activeDemo].description}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhysicsDemo;

import React from "react";
import { motion } from "framer-motion";

const VideoCard = ({ video }) => {
  return (
    <motion.div
      className="relative w-64 h-96"
      style={{ perspective: "1000px" }}
    >
      <motion.div
        className="relative w-full h-full"
        whileHover={{ rotateY: 180 }}
        transition={{ duration: 0.6 }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front */}
        <div
          className="absolute w-full h-full bg-gray-800 rounded-xl shadow-lg overflow-hidden"
          style={{ backfaceVisibility: "hidden" }}
        >
          <iframe
            width="100%"
            height="100%"
            src={`https://youtu.be/shaDHew_mrg?si=b8XNOaVYaP1vrnlT`}
            title= "cell works"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="rounded-xl"
          ></iframe>
        </div>

        {/* Back */}
        <div
          className="absolute w-full h-full bg-gray-900 text-white p-4 rounded-xl shadow-lg flex flex-col items-center justify-center"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          <h3 className="text-lg font-semibold text-center">{video.title}</h3>
          <p className="mt-2 text-sm text-center">{video.description}</p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default VideoCard;

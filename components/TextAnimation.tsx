import React from "react";
import { motion } from 'framer-motion';

const TextAnimation = () => {
  const titleText = "Unidad de Ayuda UdeA";

  const wordVariants = {
    hover: {
      backgroundColor: '#0E793C', 
      scale: 1.1,
      transition: { duration: 0.2 },
    },
  };

  const letterVariants = {
    hover: {
      rotate: [0, -5, 5, -5, 5, 0],
    },
  };

  const wordStyles = {
    fontFamily: 'Times New Roman', 
    color: 'white', 
  };

  const greenTextStyles = {
    fontFamily: 'Times New Roman', 
    color: '#0E793C', 
  };

  return (
    <motion.div className="flex space-x-2 justify-center">
      {titleText.split(" ").map((word, wordIndex) => (
        <motion.span
          key={wordIndex}
          variants={word === 'UdeA' ? wordVariants : {}}
          whileHover="hover"
          className="relative"
          style={word === 'UdeA' ? { ...wordStyles, backgroundColor: '#0E793C' } : wordStyles}
        >
          {word.split("").map((letter, letterIndex) => (
            <motion.span
              key={letterIndex}
              className={word === 'UdeA' ? 'text-3xl font-bold p-1' : 'text-3xl font-bold inline-block'}
              variants={letterVariants}
              whileHover="hover"
              style={word === 'UdeA' ? wordStyles : greenTextStyles}
            >
              {letter}
            </motion.span>
          ))}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default TextAnimation;

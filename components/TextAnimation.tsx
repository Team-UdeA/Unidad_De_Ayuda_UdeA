import React from "react";
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const TextAnimation = () => {
  const fontSize = '3rem';
  const textColor = 'green';
  const spaceColor = 'white';
  const moveDistance = 10;

  const text = '¡Unidad de Ayuda UdeA!';

  const initialVariants = {
    rest: { y: 0, opacity: 0 },
  };

  const spaceVariants = {
    rest: { display: 'inline', opacity: 1 },
  };

  const animateVariants = {
    rest: { y: 0, opacity: 1 },
  };

  const [isInitialAnimationComplete, setInitialAnimationComplete] = useState(false);

  useEffect(() => {
    const initialAnimationTimer = setTimeout(() => {
      setInitialAnimationComplete(true);
    }, 1000); // 1 segundo de duración para la animación inicial

    return () => clearTimeout(initialAnimationTimer);
  }, []);

  return (
    <motion.h1 style={{ fontSize, fontFamily: 'sans-serif' }}>
      {text.split('').map((character, index) => (
        <motion.span
          key={index}
          variants={character === ' ' ? spaceVariants : isInitialAnimationComplete ? animateVariants : initialVariants}
          initial={isInitialAnimationComplete ? 'rest' : 'rest'}
          animate="rest"
          whileHover={{ y: -moveDistance, transition: { duration: 0.3, damping: 20 } }} // Ajusta la duración y el amortiguamiento
          style={{
            display: 'inline-block',
            color: character === ' ' ? spaceColor : textColor,
          }}
        >
          {character}
        </motion.span>
      ))}
    </motion.h1>
  );
};
  export default TextAnimation;
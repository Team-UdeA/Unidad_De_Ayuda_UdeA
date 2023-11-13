'use client'
import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

const MathSymbolAnimation = () => {
  const symbols = ['∫', '∞', '∑', 'π', '√', 'Σ', '∇', '∆', '∉', '∪', '∩', '∂'];
  const colors = ['#FF5733', '#FFC300', '#3369E7', '#FF4136', '#3D9970', '#FF851B', '#B10DC9', '#0074D9'];
  const numSymbols = 50;
  const bounceStrength = 10;

  const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

  const generateRandomSymbol = (symbol, index) => {
    return {
      symbol,
      x: 0,
      y: 0,
      rotate: getRandomInt(0, 360),
      scale: 1,
      directionX: getRandomInt(0, 1) === 0 ? -1 : 1,
      directionY: getRandomInt(0, 1) === 0 ? -1 : 1,
      color: colors[getRandomInt(0, colors.length - 1)],
      id: index,
    };
  };

  const [symbolStates, setSymbolStates] = useState(Array.from({ length: numSymbols }, (_, index) => generateRandomSymbol(symbols[index % symbols.length], index)));
  const controls = useAnimation();

  const handleMouseEnter = (index) => {
    setSymbolStates((prevStates) => {
      const newStates = [...prevStates];
      const symbolState = newStates[index];
      symbolState.directionX = symbolState.directionX === 1 ? -1 : 1;
      symbolState.directionY = symbolState.directionY === 1 ? -1 : 1;
      symbolState.color = colors[getRandomInt(0, colors.length - 1)];
      return newStates;
    });

    controls.start({ scale: 1, transition: { duration: 0.3 } });
  };

  useEffect(() => {
    const initializeSymbols = () => {
      setSymbolStates((prevStates) =>
        prevStates.map((symbolState) => {
          return {
            ...symbolState,
            x: getRandomInt(0, window.innerWidth),
            y: getRandomInt(0, window.innerHeight),
          };
        })
      );
    };

    initializeSymbols();

    const moveSymbols = () => {
      setSymbolStates((prevStates) =>
        prevStates.map((symbolState) => {
          const newX = symbolState.x + symbolState.directionX * 1;
          const newY = symbolState.y + symbolState.directionY * 1;
          const bounceX = newX > window.innerWidth || newX < 0;
          const bounceY = newY > window.innerHeight || newY < 0;

          if (bounceX) {
            symbolState.directionX *= -1;
          }

          if (bounceY) {
            symbolState.directionY *= -1;
          }

          return {
            ...symbolState,
            x: newX,
            y: newY,
          };
        })
      );
    };

    const intervalId = setInterval(moveSymbols, 20);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div>
      {symbolStates.map((symbolState, index) => (
        <motion.span
          key={symbolState.id}
          style={{
            position: 'absolute',
            left: symbolState.x,
            top: symbolState.y,
            fontSize: '2rem',
            transform: `rotate(${symbolState.rotate}deg) scale(${symbolState.scale})`,
            color: symbolState.color,
          }}
          onHoverStart={() => handleMouseEnter(index)}
          initial={{ scale: 1 }}
          animate={controls}
        >
          {symbolState.symbol}
        </motion.span>
      ))}
    </div>
  );
};

export default MathSymbolAnimation;
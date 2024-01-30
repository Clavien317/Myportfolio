import React, { useState, useEffect } from 'react';

const TypeWriter = ({ text, speed }) => {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let currentIndex = 0;

    const intervalId = setInterval(() => {
      setDisplayedText((prevText) => prevText + text[currentIndex]);
      currentIndex++;

      if (currentIndex === text.length) {
        clearInterval(intervalId);
      }
    }, speed);

    return () => clearInterval(intervalId);
  }, [text, speed]);

  return <div>{displayedText}</div>;
};

const MessageAnimation = ({ messages, speed }) => {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentMessageIndex((prevIndex) => prevIndex + 1);

      if (currentMessageIndex === messages.length - 1) {
        clearInterval(intervalId);
      }
    }, speed);

    return () => clearInterval(intervalId);
  }, [messages, speed, currentMessageIndex]);

  return (
    <div>
      {currentMessageIndex < messages.length && (
        <TypeWriter text={messages[currentMessageIndex]} speed={speed} />
      )}
    </div>
  );
};

// Exemple d'utilisation
const App = () => {
  const messagesToAnimate = ["DEVELOPER MERN", "DEV MEVN", "DEV LARAVEL"];
  const animationSpeed = 1000; // en millisecondes

  return (
    <div>
      <h1>Animation de Messages</h1>
      <MessageAnimation messages={messagesToAnimate} speed={animationSpeed} />
    </div>
  );
};

export default App;

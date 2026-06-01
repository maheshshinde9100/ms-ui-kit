import React, { useState, useEffect } from 'react';

/**
 * ms-ui-kit TypewriterEffect Component
 * A component that animates text with a typing effect
 */
const TypewriterEffect = ({
  texts = [],
  typingSpeed = 80,
  deletingSpeed = 40,
  delay = 1500,
  loop = true,
  className = '',
  cursorClassName = '',
}) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (!texts || texts.length === 0) return;

    let timer;

    const handleType = () => {
      const currentFullText = texts[currentTextIndex];
      
      if (isDeleting) {
        setDisplayedText((prev) => currentFullText.substring(0, prev.length - 1));
      } else {
        setDisplayedText((prev) => currentFullText.substring(0, prev.length + 1));
      }

      let timeoutSpeed = isDeleting ? deletingSpeed : typingSpeed;

      if (!isDeleting && displayedText === currentFullText) {
        if (!loop && currentTextIndex === texts.length - 1) {
          return; // Stop typing
        }
        timer = setTimeout(() => setIsDeleting(true), delay);
        return;
      } else if (isDeleting && displayedText === '') {
        setIsDeleting(false);
        setCurrentTextIndex((prev) => (prev + 1) % texts.length);
        timeoutSpeed = typingSpeed;
      }
      
      timer = setTimeout(handleType, timeoutSpeed);
    };

    timer = setTimeout(handleType, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentTextIndex, texts, typingSpeed, deletingSpeed, delay, loop]);

  return (
    <span className={`inline-flex items-center ${className}`}>
      <span>{displayedText}</span>
      <span className={`animate-pulse ml-0.5 font-light ${cursorClassName}`}>|</span>
    </span>
  );
};

export default TypewriterEffect;

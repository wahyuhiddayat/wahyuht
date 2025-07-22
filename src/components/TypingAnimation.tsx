"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface TypingAnimationProps {
  words: string[];
  className?: string;
}

export default function TypingAnimation({ words, className = "" }: TypingAnimationProps) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const currentWord = words[currentWordIndex];
    
    if (isTyping) {
      if (currentText.length < currentWord.length) {
        const timeout = setTimeout(() => {
          setCurrentText(currentWord.slice(0, currentText.length + 1));
        }, 100);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setIsTyping(false);
        }, 2000);
        return () => clearTimeout(timeout);
      }
    } else {
      if (currentText.length > 0) {
        const timeout = setTimeout(() => {
          setCurrentText(currentText.slice(0, -1));
        }, 50);
        return () => clearTimeout(timeout);
      } else {
        setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        setIsTyping(true);
      }
    }
  }, [currentText, currentWordIndex, isTyping, words]);

  return (
    <span className={className}>
      {currentText}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
        className="ml-1"
      >
        |
      </motion.span>
    </span>
  );
}
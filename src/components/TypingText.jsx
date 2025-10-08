import React, { useState, useEffect } from "react";

const TypingText = ({ texts, speed = 150 }) => {
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDisplayText((prev) => prev + texts[index][charIndex]);
      if (charIndex + 1 < texts[index].length) {
        setCharIndex(charIndex + 1);
      } else {
        setTimeout(() => {
          setDisplayText("");
          setCharIndex(0);
          setIndex((index + 1) % texts.length);
        }, 1000);
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [charIndex, index, texts, speed]);

  return <span>{displayText}</span>;
};

export default TypingText;

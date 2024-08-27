import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import { ComponentTriangle } from '../spinner/triangle1';
import AudioComponents from '../spinner/audio';

const Animated = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setIsFlipped(prevIsFlipped => !prevIsFlipped);
  };

  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
      <div key="front">
       <ComponentTriangle/>
       <button onClick={handleClick}>Click to flip</button>
      </div>


      <div key="back">
        <AudioComponents/>
        <button onClick={handleClick}>Click to flip</button>
      </div>
 
    </ReactCardFlip>
  );
};

export default Animated;

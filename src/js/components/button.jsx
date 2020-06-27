import React from 'react'

let countFrames = 0;

export const Button = ({onClick, frameNumber, className, title}) => {
  const buttonRef = useRef();

  const hitBox = [

  ];

  return (
    <button
      className={className}
      onClick={() => onClick()}
      ref={buttonRef}
    >{title}</button>
  );
}
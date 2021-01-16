import React, { useEffect, useRef, useState } from 'react'
import {Hitbox} from '../helpers/index'

export const Button = ({onClick, frameNumber, className, title, hand, onHover}) => {
  const buttonRef = useRef();

  const [countFrames, setCountFrames] = useState(0);

  useEffect(() => {
    if(hand) {
      const coord = buttonRef.current.getBoundingClientRect();
      const box = new Hitbox(coord.left, coord.top, coord.width, coord.height);
      if(box.isPointIn(hand)) {
        setCountFrames(countFrames + 1);
      } else {
        setCountFrames(0);
      }

      if(countFrames === frameNumber) {
        buttonRef.current.click();
        setCountFrames(0);
      }
    }
  }, [hand]);

  return (
    <button
      onClick={() => onClick()}
      ref={buttonRef}
      className={className}
    >{title}</button>
  );
}
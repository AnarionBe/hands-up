import React, { useEffect, useRef, useState } from 'react'
import {Button} from '../components/index'
import {EMPTY_SPACE} from '../helpers/index'

let timeoutId = null;

export const Aim = ({hand}) => {
  const [position, setPosition] = useState({});
  const container = useRef();

  useEffect(() => {
    const timeoutAction = () => {
      const newCoord = {};

      newCoord.x = Math.floor(Math.random() * (container.current.clientWidth - EMPTY_SPACE)) + EMPTY_SPACE;
      newCoord.y = Math.floor(Math.random() * (container.current.clientHeight - EMPTY_SPACE)) + EMPTY_SPACE;

      setPosition(newCoord);

      timeoutId = setTimeout(timeoutAction, 1000);
    }
    
    timeoutAction();

    return (() => {
      clearTimeout(timeoutId);
    });
  }, []);

  return (
    <div className="aim" ref={container}>
      <Button
        onClick={() => {
          console.warn('hit')
        }}
        title="HIT ME"
        hand={hand}
        style={{
          top: position.y,
          left: position.y
        }}
        className="aim__target"
      />
    </div>
  );
}
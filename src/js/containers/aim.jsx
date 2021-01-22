import React, { useEffect, useRef, useState } from 'react'
import {Button} from '../components/index'
import {EMPTY_SPACE} from '../helpers/index'

export const Aim = ({hand}) => {
  const [position, setPosition] = useState({});
  const [score, setScore] = useState(0);
  const container = useRef();

  let timeoutId = null;

  useEffect(() => {
    const timeoutAction = () => {
      const newCoord = {};

      newCoord.x = Math.floor(Math.random() * (container.current.clientWidth - EMPTY_SPACE * 2)) + EMPTY_SPACE;
      newCoord.y = Math.floor(Math.random() * (container.current.clientHeight - EMPTY_SPACE * 2)) + EMPTY_SPACE;

      setPosition(newCoord);

      timeoutId = setTimeout(timeoutAction, 2000);
    }
    
    timeoutAction();

    return (() => {
      clearTimeout(timeoutId);
    });
  }, []);

  return (
    <div className="aim" ref={container}>
      <div className="aim__score">score: {score}</div>

      <Button
        onClick={() => {
          setScore(score + 1);
        }}
        title="HIT ME"
        hand={hand}
        style={{
          top: position.y,
          left: position.x
        }}
        className="aim__target"
        sensibility={2}
      />
    </div>
  );
}
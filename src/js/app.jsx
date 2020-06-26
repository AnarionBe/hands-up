import React, { useEffect, useState, useRef } from 'react'
import {Camera} from './components/index'

export default () => {
  const [source, setSource] = useState(null);
  const [buttonValue, setButtonValue] = useState('click me');
  const [buttonValue2, setButtonValue2] = useState('click me');
  
  let count = 0;
  let count2 = 0;

  const buttonRef = useRef();
  const buttonRef2 = useRef();

  useEffect(() => {
    navigator.mediaDevices.getUserMedia({video: true}).then(src => {
      setSource(src);
    });
  });

  const handleDetect = (coord) => {
    const target = buttonRef.current.getBoundingClientRect();
    const target2 = buttonRef2.current.getBoundingClientRect();

    const conds = [
      coord.x >= target.left,
      coord.x <= target.left + target.width,
      coord.y >= target.top,
      coord.y <= target.top + target.top,
    ];

    const conds2 = [
      coord.x >= target2.left,
      coord.x <= target2.left + target2.width,
      coord.y >= target2.top,
      coord.y <= target2.top + target2.top,
    ];

    if(!conds.includes(false)) {
      count++;
      if(count === 10) {
        buttonRef.current.click();
        count = 0;
      }
    } else if(!conds2.includes(false)) {
      count2++;
      if(count2 === 10) {
        buttonRef2.current.click();
        count2 = 0;
      }
    } else {
      count = 0;
      count2 = 0;
    }
  }

  return (
    <div className="app">
      {source && <Camera boxMode={1} displayVideo source={source} onDetect={handleDetect} />}
      <div className="app__content">
        <button onClick={() => setButtonValue('Clicked')} style={styles.button} ref={buttonRef}>{buttonValue}</button>
        <button onClick={() => setButtonValue2('Clicked')} style={styles.button2} ref={buttonRef2}>{buttonValue2}</button>
      </div>
    </div>
  );
}

const styles = {
  button: {
    position: 'absolute',
    top: '50vh',
    left: '25vw',
    width: '100px',
    height: '100px',
    backgroundColor: 'transparent',
    color: 'red',
    borderColor: 'red',
    fontSize: '1.5rem'
  },
  button2: {
    position: 'absolute',
    top: '50vh',
    left: '75vw',
    width: '100px',
    height: '100px',
    backgroundColor: 'transparent',
    color: 'green',
    borderColor: 'green',
    fontSize: '1.5rem'
  }
}
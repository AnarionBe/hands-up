import React, { useEffect, useState, useRef } from 'react'
import {Camera, Numpad} from './components/index'

export default () => {
  const [source, setSource] = useState(null);
  const [hand, setHand] = useState(null);
  const [content, setContent] = useState('');

  useEffect(() => {
    navigator.mediaDevices.getUserMedia({video: true}).then(src => {
      setSource(src);
    });

    return (() => {
      source.stop();
    });
  }, []);

  const handleDetect = (coord) => {
    setHand(coord);
  }

  return (
    <div className="app">
      {source && <Camera boxMode={4} displayVideo source={source} onDetect={handleDetect} />}
      <div className="app__content">
        <Numpad
          hand={hand}
          onClick={(val) => {setContent(content + val)}}
        />
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
  }
}
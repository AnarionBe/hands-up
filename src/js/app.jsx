import React, { useEffect, useState, useRef } from 'react'
import {Camera} from './components/index'
import {Menu, Home, Numpad} from './containers/index'

export default () => {
  const [source, setSource] = useState(null);
  const [position, setPosition] = useState(null);
  const [page, setPage] = useState('home');
  const canvasRef = useRef();

  useEffect(() => {
    navigator.mediaDevices.getUserMedia({video: true}).then(src => {
      setSource(src);
    });

    return (() => {
      source.stop();
    });
  }, []);

  const handleDetect = (coord) => {
    setPosition(coord);
  }

  const displayContent = () => {
    switch(page) {
      case 'numpad': return <Numpad hand={position} />

      default: return <Home />
    }
  }

  return (
    <div className="app">
      {source && <Camera displayVideo source={source} onDetect={handleDetect} canvasRef={canvasRef} />}
      <canvas className="app__canvas" ref={canvasRef} />
      <Menu setPage={setPage} />
      <div className="app__content">
        {displayContent()}
      </div>
    </div>
  );
}
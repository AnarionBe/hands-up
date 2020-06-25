import React, { useEffect, useState } from 'react'
import {Camera} from './components/index'

export default () => {
  const [source, setSource] = useState(null);

  useEffect(() => {
    navigator.mediaDevices.getUserMedia({video: true}).then(src => {
      setSource(src);
    });
  });

  return (
    <div className="app">
      {source && <Camera boxMode={2} displayVideo source={source} />}
    </div>
  );
}
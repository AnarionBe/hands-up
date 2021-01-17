import React, {useRef, useState, useEffect} from 'react'
import * as handTrack from 'handtrackjs'
import {Hitbox} from '../helpers/index'

/**
 * 
 * @param {Boolean} displayVideo show or not video (default = false)
 * @param {MediaStream} source the video source (REQUIRED)
 * @param {Function} onDetect
 */
export const Camera = ({displayVideo = false, source, onDetect, canvasRef}) => {
  const webcamRef = useRef();

  const [model, setModel] = useState(null);
  const [timeoutId, setTimeoutId] = useState(null);
  const [ctx, setCtx] = useState(null);

  useEffect(() => {
    webcamRef.current.srcObject = source;
    webcamRef.current.width  = window.innerWidth;
    webcamRef.current.height = window.innerHeight;

    canvasRef.current.width  = window.innerWidth;
    canvasRef.current.height = window.innerHeight;
    setCtx(canvasRef.current.getContext('2d'));

    handTrack.load({scoreThreshold: 0.9}).then(m => {
      setModel(m);
    });
  }, []);

  useEffect(() => {
    setTimeoutId(setTimeout(detection, 0));

    return () => {
      clearTimeout(timeoutId);
    }
  }, [model])

  const detection = async () => {
    try {
      if(model) {
        const result = await model.detect(webcamRef.current);
        ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);

        result.forEach(h => {
          const box = new Hitbox(...h.bbox);

          box.drawCenter(ctx);
          box.draw(ctx);

          onDetect(box.center);
        });
      }
    } catch(err) {
      console.error(err);
    } finally {
      setTimeoutId(setTimeout(detection, 80));
    }
  }

  return (
    <div className="camera">
      <video className="camera__video" ref={webcamRef} autoPlay style={displayVideo ? {} : {display: "none"}}></video>
    </div>
  );
}
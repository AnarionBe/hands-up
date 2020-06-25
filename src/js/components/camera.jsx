import React, {useRef, useState, useEffect} from 'react'
import * as handTrack from 'handtrackjs'

/**
 * 
 * @param {Integer} detectionSize size of custom detection box (default = 5)
 * @param {Integer} boxMode type of detection box redenring (default = 0)
 *                          0: handtrackjs box
 *                          1: box with custom size
 *                          2: both
 * @param {Boolean} displayVideo show or not video (default = false)
 * @param {MediaStream} source the video source (REQUIRED)
 */
export const Camera = ({detectionSize, boxMode, displayVideo, source}) => {
  const webcamRef = useRef();
  const canvasRef = useRef();

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

    handTrack.load({scoreThreshold: 0.8}).then(m => {
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
          if(!boxMode || boxMode === 2) {
            drawBox(h.bbox);
          }
  
          if(boxMode === 1 || boxMode === 2) {
            drawCustomDetection(h.bbox);
          }
        });
      }
    } catch(err) {
      console.error(err);
    } finally {
      setTimeoutId(setTimeout(detection, 80));
    }
  }

  const drawBox = (box) => {
    ctx.beginPath();
    ctx.moveTo(box[0], box[1]);
    ctx.lineTo(box[0] + box[2], box[1]);
    ctx.lineTo(box[0] + box[2], box[1] + box[3]);
    ctx.lineTo(box[0], box[1] + box[3]);
    ctx.lineTo(box[0], box[1]);
    ctx.stroke();
  }

  const drawCustomDetection = (box) => {
    const size = detectionSize || 5;
    const refPoint = [box[0] + box[2] / 2 - size / 2, box[1] + box[3] / 2 - size / 2];
    ctx.fillRect(refPoint[0], refPoint[1], size, size);
  }

  return (
    <div className="camera">
      <video className="camera__video" ref={webcamRef} autoPlay style={displayVideo ? {} : {display: "none"}}></video>
      <canvas className="camera__canvas" ref={canvasRef}></canvas>
    </div>
  );
}
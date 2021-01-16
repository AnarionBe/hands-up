import React from 'react'
import {Button} from './index'

const frameNumber = 5;

export const Numpad = ({hand, onClick}) => {
  return (
    <div className="numpad">
      <div className="row">
        <Button
          frameNumber={frameNumber}
          onClick={() => {onClick('7')}}
          title="7"
          hand={hand}
          className="numpad__button"
        />
        <Button
          frameNumber={frameNumber}
          onClick={() => {onClick('8')}}
          title="8"
          hand={hand}
          className="numpad__button"
        />
        <Button
          frameNumber={frameNumber}
          onClick={() => {onClick('9')}}
          title="9"
          hand={hand}
          className="numpad__button"
        />
      </div>

      <div className="row">
        <Button
          frameNumber={frameNumber}
          onClick={() => {onClick('4')}}
          title="4"
          hand={hand}
          className="numpad__button"
        />
        <Button
          frameNumber={frameNumber}
          onClick={() => {onClick('5')}}
          title="5"
          hand={hand}
          className="numpad__button"
        />
        <Button
          frameNumber={frameNumber}
          onClick={() => {onClick('6')}}
          title="6"
          hand={hand}
          className="numpad__button"
        />
      </div>

      <div className="row">
        <Button
          frameNumber={frameNumber}
          onClick={() => {onClick('1')}}
          title="1"
          hand={hand}
          className="numpad__button"
        />
        <Button
          frameNumber={frameNumber}
          onClick={() => {onClick('2')}}
          title="2"
          hand={hand}
          className="numpad__button"
        />
        <Button
          frameNumber={frameNumber}
          onClick={() => {onClick('3')}}
          title="3"
          hand={hand}
          className="numpad__button"
        />
      </div>

      <div className="row">
        <Button
          frameNumber={frameNumber}
          onClick={() => {onClick('*')}}
          title="*"
          hand={hand}
          className="numpad__button"
        />
        <Button
          frameNumber={frameNumber}
          onClick={() => {onClick('0')}}
          title="0"
          hand={hand}
          className="numpad__button"
        />
        <Button
          frameNumber={frameNumber}
          onClick={() => {onClick('#')}}
          title="#"
          hand={hand}
          className="numpad__button"
        />
      </div>
    </div>
  );
}
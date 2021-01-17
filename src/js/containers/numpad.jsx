import React, { useState } from 'react'
import {Button} from '../components/index'
import {NUMPAD_VALUES} from '../helpers/index'

export const Numpad = ({hand}) => {
  const [value, setValue] = useState('');

  return (
    <div className="numpad">
      <div className="numpad__value">Result: {value}</div>

      <div className="numpad__pad">
        {NUMPAD_VALUES.map(val => (
          <Button
            onClick={() => {
              if(val === 'clear') return setValue('');
              if(val === 'del') return setValue(value.slice(0, -1));
              return setValue(value + val);
            }}
            title={val}
            hand={hand}
            className="numpad__button"
            key={val}
          />
        ))}
      </div>
    </div>
  );
}
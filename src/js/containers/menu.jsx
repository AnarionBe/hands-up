import React from 'react'
import {Button} from '../components/index'

export const Menu = ({setPage}) => {
  return (
    <aside className="menu">
      <nav>
        <ul>
          <li>
            <Button
              className="menu__item"
              title="Home"
              onClick={(() => setPage('home'))}
            />
          </li>
          <li>
            <Button
              className="menu__item"
              title="Numpad"
              onClick={(() => setPage('numpad'))}
            />
          </li>
        </ul>
      </nav>
    </aside>
  )
}
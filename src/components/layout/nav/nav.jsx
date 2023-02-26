import React from 'react'
import logo from './logo.png'
import './nav.css'

export default function Nav() {
  return (
    <nav>
        <div className="container container_nav">
            <div className="nav_logo">
              <img src={logo} alt="" />
              <p>Some bank</p>
            </div>
            <ul>
              <li>item</li>
              <li>item</li>
              <li>item</li>
              <li>item</li>
            </ul>
            <div className="nav_btns">
              <button className="nav_login">Log in</button>
              <button className='nav_signup'>Sign up</button>
            </div>
            </div>
          </nav>
  )
}

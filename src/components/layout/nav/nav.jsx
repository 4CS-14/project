import React from 'react'
import logo from './logo.png'
import './nav.css'

export default function Nav() {
  return (
    <nav>
        <div className="container container_nav">
            <div className="nav_logo">
              <img src={logo} alt="" />
              <div className="logo_txt">
                <h2>Cash Titan</h2>
                <p>universal bank</p>
              </div>
              
            </div>
            <ul>
              <li>Відкрити картку</li>
              <li>Про нас</li>
              <li>Чому ми?</li>
            </ul>
            <div className="nav_btns">
              <button className="nav_login">Увійти</button>
            </div>
            </div>
          </nav>
  )
}

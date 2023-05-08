import React from 'react'
import './nav.css'

export default function Nav() {
  return (
    <nav>
        <div className="container container_nav">
            <div className="nav_logo">
            
                <h2>Cash Titan</h2>
                <p>universal bank</p>
             
            </div>
            <ul>
              <li>Головна</li>
              <li>Картки</li>
              
            </ul>
            <div className="nav_btns">
              <button className="nav_login">Увійти</button>
            </div>
            </div>
          </nav>
  )
}

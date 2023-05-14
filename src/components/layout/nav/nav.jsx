import React from 'react'
import './nav.css'
import { NavLink } from 'react-router-dom'

export default function Nav() {
  return (
    <nav>
        <div className="container container_nav">
            <div className="nav_logo">
            
                <h2>Cash Titan</h2>
                <p>universal bank</p>
             
            </div>
            <ul>
              <li><NavLink to="/"> Головна </NavLink></li>
              <li><NavLink to="/cards"> Картки </NavLink></li>
              
            </ul>
            <div className="nav_btns">
              <NavLink to="/login"><button className="nav_login">Увійти</button></NavLink>
            </div>
            </div>
          </nav>
  )
}

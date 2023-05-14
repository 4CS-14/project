import React from 'react'
import "./reg.css"
import logo from './logo.svg'
import { NavLink } from 'react-router-dom'
export default function Registration() {
  return (
    <div className='reg_page'>
        <p className='reg_title'>Увійдіть в акаунт:</p>
        <div  className='reg_form'>
            <p>ПІБ</p>
            <input type="text" />
            <p>Номер телефону:</p>
            <input type="text" />
            <p>Email:</p>
            <input type="text" />
            <p>Пароль:</p>
            <input type="text" />
            <p>Підтвердіть пароль:</p>
            <input type="text" />
            <button>Вхід</button>
            <NavLink to="/login"> <div className="reg_link">Маєте акаунт?<br/> Увійдіть</div></NavLink>
            <img src={logo} alt="" />
        </div>
    </div>
  )
}

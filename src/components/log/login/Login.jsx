import React from 'react'
import "./login.css"
import logo from './logo.svg'
import { NavLink } from 'react-router-dom'
export default function Login() {
  return (
    <div className='login_page'>
        <p className='login_title'>Увійдіть в акаунт:</p>
        <div  className='login_form'>
            <p>Номер телефону:</p>
            <input type="text" />
            <p>Email:</p>
            <input type="text" />
            <div className="form_password">
                <p>Пароль:</p>
                <p>Забули пароль?</p>
            </div>
            <input type="text" />
            <button>Вхід</button>
            <NavLink to="/registration"> <div className="reg_link">Немає акаунту?<br/>  Зареєструватися</div></NavLink>
            <img src={logo} alt="" />
        </div>
    </div>
  )
}

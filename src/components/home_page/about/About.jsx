import React from 'react'
import './about.css'
import logo from './logo.png'

export default function About() {
  return (
    <div className='container about_cont'>
      <h2>Про нас</h2>
      <p>Хто ми?</p>
      <p>Ми - команда студентів, що у 2023 році створила 
новий мегазручний банк, користування яким
 принесе виключно позитивні емоції та
 враження, обіцяємо!</p>
      <p>Наша головна мета це те, що ми прагнемо зробити
 цей світ кращим! </p>
      <p>Приєднуйся до нашої великої сім’ї, скористайся 
вигідними умовами і ти ніколи не пошкодуєш
 що став клієнтом нашого банку!</p>
      <div className="about_img">
        <img src={logo} alt="" />
        <p>Cash Titan</p>
      </div>
    </div>
  )
}

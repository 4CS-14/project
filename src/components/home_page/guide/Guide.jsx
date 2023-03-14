import React from 'react'
import './guide.css'

import img1 from './img1.png'
import img2 from './img2.png'
import img3 from './img3.png'



export default function Guide() {
  return (
    <div className='guide'>
      <h2 className='guide_title'>Як отримати нашу картку?</h2>
      <div className="guide_item">
        <img src={img1} alt="" />
        <h2>Крок 1:</h2>
        <p>Залиш свою електронну адресу та отримай посилання з умовами отримання картки</p>
      </div>
      <div className="guide_item">
        <img src={img2} alt="" />
        <h2>Крок 2:</h2>
        <p>Надай фото своїх документів, прикріпи власне селфі та чекай на електронну версію картки</p>
      </div>
      <div className="guide_item">
        <img src={img3} alt="" />
        <h2>Крок 3:</h2>
        <p>Вітаємо! Тепер ти клієнт нашого банку:)</p>
      </div>
    </div>
  )
}

import React from 'react'
import './benefits.css'

import img1 from './img1.png'
import img2 from './img2.png'
import img3 from './img3.png'
import img4 from './img4.png'

export default function Benefits() {
  return (
    <div className="benef">
    <div className='container benefits_cont'> 
      <h2 className='ben_title'>Чому ж варто обрати нас?</h2>
      <div className="ben_item">
        <img src={img1} alt="" />
        <div className="ben_item_txt ben_r">
            <h2>Легке відкриття картки з будь-якого девайсу!</h2>
            <p>Більше не потрібно стояти годинами в черзі і сваритись з бабуськами - в нашому банку можна оформити картку в декілька кліків</p>
        </div>
      </div>
      <div className="ben_item">
        
        <div className="ben_item_txt">
            <h2>Ми дбаємо про своїх клієнтів!</h2>
            <p>Вигідні умови співпраці чекають на тебе після того, як ти станеш частинкою Cash Titan Family:)</p>
        </div>
        <img src={img2} alt="" />
      </div>
      <div className="ben_item">
        <img src={img3} alt="" />
        <div className="ben_item_txt ben_r">
            <h2>Твої кошти завжди в безпеці!</h2>
            <p>Не потрібно перейматись через те, що ти можеш згубити свої кошти! Вони захищені і знаходяться в тебе в смартфоні!</p>
        </div>
      </div>
      <div className="ben_item">
        
        <div className="ben_item_txt">
            <h2>Цілодобова клієнтська підтримка!</h2>
            <p>Ніяких ботів та автовідповідачів! Лише реальні люди, які дбають про те, аби в тебе не виникло жодних труднощів та швидко вирішують проблеми!</p>
        </div>
        <img src={img4} alt="" />
      </div>
    </div>
    </div>
  )
}

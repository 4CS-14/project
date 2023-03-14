import React from 'react'
import './header.css'
import card_pic from './card.png'

export default function Header() {
  return (
     <header>
        <div className="container cont_header">
          <div className="header_pic">
            <div className="header_pic_rect">
              <p>Повідомлення:</p>
              <p>ми - твій найкращий вибір!</p>
              <p>♡</p>
            </div>
            <img src={card_pic} alt="" />
          </div>
              <div className="header_form">
                <h2>Відкрити картку в один клік? <br />
                  З нами це можливо!</h2>
                <p>Залиш адресу своєї електронної пошти та чекай листа з посиланням:)</p>
                <input type="text" />
                <button>Відправити</button>
              </div>
            </div>
    </header>
      
  )
}

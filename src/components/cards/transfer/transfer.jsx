import React from 'react'
import "./transfer.css"
import { Card_item } from '../cards_main/Cards_main'
import visa from './visa.svg'
import master from './master.svg'
import coins from './coins.svg'

export default function Transfer() {
  return (
    <div className='transfer'>
        <div className="about_card ">
      <div className="transfer_upper container">
        <div className="trans_card">
            <p className='trans_card_name'>Картка 1</p>
            <Card_item />
        </div>
        <div className="balance">
            <p className='balance_title'>Баланс:</p>
            <p className='balance_count'>10 005 ₴</p>
        </div>
      </div>
      <div className="transfer_lower container">
       <p className=' transfer_title'>Переказ грошей з картки на картку:</p>
       <div className="transfer_section">
        <div className="transfer_form">
            <h2>Номер карти одержувача:</h2>
            <input className='transfer_card_num' type="text" placeholder='**** **** **** ****' />
            <h2>Сума:</h2>
            <div className="form_subsec">
                <p className='cash_to_send'>400 |<span>грн</span> </p>
                <p className='comission'>Комісія 1% і 5 грн <br/> <span>9.00 грн</span> </p>
            </div>
        </div>
        <div className="transfer_button">
            <div className="visa">
                <img src={visa} alt="" />
                <img src={master} alt="" />
            </div>
            <button>Переказати &#8594;</button>
        </div>
       </div>
      </div>
      </div>
      <div className="transfer_story">
        <p className='story_title'>Історія переказів:</p>
        <div className="story_cont container">
            <div className="trans_story_item">
                <div className="story_left">
                  <div className="story_img">
                    <p className='story_img_name'>Картка 1</p>
                    <Card_item/>
                  </div>
                  <div className="story_name">
                    <p>*3892 Картка для виплат.... <br /><span>501 UAH</span></p>
                  </div>
                </div>
                <div className="story_right">
                  <p>Картка одержувача: 5869 4863 1234 5678</p>
                  <img src={coins} alt="" />
                </div>
            </div>
            <div className="trans_story_item">
                <div className="story_left">
                  <div className="story_img">
                    <p className='story_img_name'>Картка 1</p>
                    <Card_item/>
                  </div>
                  <div className="story_name">
                    <p>*3892 Картка для виплат.... <br /><span>501 UAH</span></p>
                  </div>
                </div>
                <div className="story_right">
                  <p>Картка одержувача: 5869 4863 1234 5678</p>
                  <img src={coins} alt="" />
                </div>
            </div>
            <div className="trans_story_item">
                <div className="story_left">
                  <div className="story_img">
                    <p className='story_img_name'>Картка 1</p>
                    <Card_item/>
                  </div>
                  <div className="story_name">
                    <p>*3892 Картка для виплат.... <br /><span>501 UAH</span></p>
                  </div>
                </div>
                <div className="story_right">
                  <p>Картка одержувача: 5869 4863 1234 5678</p>
                  <img src={coins} alt="" />
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

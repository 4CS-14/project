import React from 'react'
import './Cards_main.css'
import sim from './sim.png'
import { NavLink } from 'react-router-dom'

export function Card_item() {
    return(
        
        <div className="card_item">
                <div className="card_card card_item_black">
                    <p>Cash Titan</p>
                    <img src={sim} alt="" />
                </div>
                
            </div>
            
    )
}

export function Cards_main() {
  return (
    <div className="cards_main">
        <p className='cards_title'>Ваші картки:</p>
    <div className='container cards_main_cont'>
        
        <div className="cards_list">
        <NavLink to="/transfer">
                <Card_item/>
                <p className='card_name'>Картка</p>
           </NavLink>
            <div className="card_item">
            <div className="card_card card_item_gray">
                    <p>Cash Titan</p>
                    <img src={sim} alt="" />
                </div>
                <p className='card_name'>Картка</p>
            </div>
            <div className="card_item">
            <div className="card_card card_item_yellow">
                    <p>Cash Titan</p>
                    <img src={sim} alt="" />
                </div>
                <p className='card_name'>Картка</p>
            </div>
            <div className="add_card card_item">
                    <div className="add_card_card card_card">+</div>
                    <div className="card_name">
                        <p>Додати нову картку...</p>
                        </div>
            </div>
        </div>
    </div>
    
    </div>
  )
}

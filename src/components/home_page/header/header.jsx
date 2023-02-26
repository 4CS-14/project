import React from 'react'
import './header.css'
import photo from './Photo.jpg'

export default function Header() {
  return (
     <header>
        <div className="container cont_header">
          <div className="hero_btn">
            <h2>Lorem, ipsum dolor Lorem, ipsum. Lorem, ipsum.</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis obcaecati illum vel aut delectus accusantium nisi reiciendis voluptas cupiditate laborum!</p>
            <button>Create card</button>
          </div>
          <div className="hero_cards">
                    <div>
                        <img src={photo} alt="" />
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi sint repudiandae sequi quaerat eligendi! Voluptatibus?</p>
                        </div>
                    <div>
                        <img src={photo} alt="" />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat excepturi a explicabo?</p>
                        </div>
                    <div>
                        <img src={photo} alt="" />
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam quisquam sit modi mollitia asperiores quo quas aspernatur!</p>
                        </div>
                </div>
            </div>
    </header>
      
  )
}

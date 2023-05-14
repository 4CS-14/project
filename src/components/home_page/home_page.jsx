import React from 'react'
import About from './about/About';
import Benefits from './Benefits/Benefits';

import Guide from './guide/Guide';
import Header from './header/header';


export default function Home_page() {
  return (
    <div>
        
        <Header/>
        <About/>
        <Benefits/>
        <Guide/>
        
    </div>
  )
}

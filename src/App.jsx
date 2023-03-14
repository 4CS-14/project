import React from 'react';
import './App.css'
import About from './components/home_page/about/About';
import Benefits from './components/home_page/Benefits/Benefits';
import Footer from './components/home_page/footer/Footer';
import Guide from './components/home_page/guide/Guide';
import Header from './components/home_page/header/header';
import Nav from './components/layout/nav/nav';

function App() {
  return (
    <div className="app">
      
        <Nav/>
        <Header/>
        <About/>
        <Benefits/>
        <Guide/>
        <Footer/>
    </div>
  );

  
}

export default App;

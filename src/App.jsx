import React from 'react';
import './App.css'
import Footer from './components/layout/footer/Footer'
import Nav from './components/layout/nav/nav'
import {
  Route,
  Routes
} from "react-router-dom";
import Home_page from './components/home_page/home_page';
import Cards from './components/cards/Cards';
import Transfer from './components/cards/transfer/transfer';
import Login from './components/log/login/Login';
import Registration from './components/log/reg/reg';


function App() {
  return (
    <div className="app">
      <Nav/>
      <Routes>
        <Route path="/" element={<Home_page />} />
        <Route path="/cards" element={<Cards />} />
        <Route path="/transfer" element={<Transfer/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/registration" element={<Registration/>} />
      
      </Routes>  
      <Footer/>
        
    </div>
  );

  
}

export default App;

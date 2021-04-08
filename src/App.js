import React from 'react';
import "./App.css"
import Header from './components/Header';
import Navbar from './components/Nav';
import Profile from './components/Profile';
import Footer from './footer';





const App = () => {
  return (
    
    <div className='app-wrapper'>
             <Header/>
             <Navbar/>
             <Profile/>
             <Footer/>
           
    
   
      </div>
  );
  
}




export default App;

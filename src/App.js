import React from 'react';
import './App.scss';
import Footer from './components/Footer';
import Header from './components/Header';
import Navbar from './components/Nav';
import Profile from './components/Profile';

const App = () => {
  const prop = 'DIMA';
  return (
    <div className="app-wrapper">
      <Header props={prop} />
      <div className="content-wrapper">
        <Navbar />
        <Profile />
      </div>
      <Footer />
    </div>
  );
};

export default App;

import React from 'react';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Navbar from './components/Nav/Nav';
import Profile from './components/Profile/Profile';

const App = () => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className="app-wrapper-content">
          <Route path="/dialogs" component={Dialogs} />
          <Route path="/profile" component={Profile} />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;

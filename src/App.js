import React from 'react';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Navbar from './components/Nav/Nav';
import Profile from './components/Profile/Profile';

const App = props => {
  let postData = [
    { id: 1, message: 'Hi, how are you?', likesCount: 2 },
    { id: 2, message: 'It is gitmy first post', likesCount: 11 },
  ];
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className="app-wrapper-content">
          <Route
            path="/dialogs"
            render={() => <Dialogs DialogsData={props.DialogsData} messagesData={props.messagesData} />}
          />
          <Route path="/profile" render={() => <Profile postData={props.postData} />} />
          <Route path="/news" component={Dialogs} />
          <Route path="/music" component={Dialogs} />
          <Route path="/settings" component={Dialogs} />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;

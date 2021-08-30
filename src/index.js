import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let postData = [
  { id: 1, message: 'Hi, how are you?', likesCount: 2 },
  { id: 2, message: 'It is gitmy first post', likesCount: 11 },
];
let DialogsData = [
  { id: 1, name: 'Dima' },
  { id: 3, name: 'Alex' },
  { id: 4, name: 'Dima' },
  { id: 5, name: 'Ana' },
];

let messagesData = [
  { id: 1, message: 'hi' },
  { id: 3, message: 'haw are you' },
  { id: 4, message: 'ok' },
  { id: 5, message: 'hello' },
];

ReactDOM.render(
  <React.StrictMode>
    <App postData={postData} DialogsData={DialogsData} messagesData={messagesData} />
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

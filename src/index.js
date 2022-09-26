import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

//css
import App from './App';

//firebase
import './firebase/cfg'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);



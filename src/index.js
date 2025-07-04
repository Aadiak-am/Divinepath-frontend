// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';




import { Provider } from 'react-redux';
import store from './app/store';
import { UserProvider } from './Context/userContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <UserProvider>
    <App />
    </UserProvider>
  </Provider>
);

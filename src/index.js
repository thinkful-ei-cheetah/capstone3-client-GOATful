import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import { UserProvider } from './contexts/UserContext'
import AppError from './components/AppError/AppError'

ReactDOM.render(
  <AppError>
    <BrowserRouter>
      <UserProvider>
        <App />
      </UserProvider>
    </BrowserRouter>
  </AppError>,
  document.getElementById('root'),
)

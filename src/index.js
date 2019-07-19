import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import { BrowserRouter } from 'react-router-dom'
import { UserProvider } from './contexts/UserContext'
import { AppProvider } from './contexts/AppContext'
import AppError from './components/AppError/AppError'
import * as serviceWorker from './serviceWorker'

require('dotenv').config()

ReactDOM.render(
  <AppError>
    <BrowserRouter>
      <UserProvider>
        <AppProvider>
          <App />
        </AppProvider>
      </UserProvider>
    </BrowserRouter>
  </AppError>,
  document.getElementById('root'),
)

serviceWorker.register()
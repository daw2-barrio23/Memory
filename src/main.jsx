import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ClicksProvider } from './context/GlobalContext.jsx'
import { BrowserRouter } from 'react-router-dom'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ClicksProvider>
        <App />
      </ClicksProvider>
    </BrowserRouter>
  </React.StrictMode>
);



import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ClicksProvider } from './context/GlobalContext.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ClicksProvider>
      <App />
    </ClicksProvider>
  </React.StrictMode>
);



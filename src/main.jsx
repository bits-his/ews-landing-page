import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import Pricing from './LandingPage/Pricing'
import './Styles/AppStyles.css'
import 'bootstrap/dist/css/bootstrap.css'
import CountactUs from './CountactUs'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Pricing />
    <hr/>
    <CountactUs />
  </React.StrictMode>,
)

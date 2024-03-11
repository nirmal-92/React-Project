import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import {Navbar} from './Navbar.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  // React.createElement("div",{},"hello world. I am Nirmal")
  <BrowserRouter>
    <Navbar/>
  </BrowserRouter>
)

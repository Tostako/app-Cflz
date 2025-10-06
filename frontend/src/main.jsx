import { StrictMode } from 'react'
import ReactDOM from "react-dom/client";
import './index.css'
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import App from './App.jsx'
import Prueba from './components/pages/diseños';


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/diseños" element={<Prueba/>} />
    </Routes>
  </BrowserRouter>
)

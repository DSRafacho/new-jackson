import React from 'react';
import ReactDOM from 'react-dom/client';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import App from './App';
import './index.css';
import DiaNoivo from './telas/DiaNoivo';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<App />} />
        <Route path='/dia-do-noivo/' element={<DiaNoivo />} />
        <Route path='/agende-um-horario/' element={<App />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>

);
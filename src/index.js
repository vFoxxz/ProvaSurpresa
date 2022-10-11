import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './pages/home'
import Acai from './pages/acai'
import Signo from './pages/signo'
import Sorveteria from './pages/sorveteria'
import Salario from './pages/salario';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Paradas from './pages/paradas';
import Temperatura from './pages/febre';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/'   element={<Home/>} />
      <Route path='/acai'   element={<Acai/>} />
      <Route path='/signo'   element={<Signo/>} />
      <Route path='/sorveteria'   element={<Sorveteria/>} />
      <Route path='/salario' element = {<Salario/>}/>
      <Route path='/paradas' element = {<Paradas/>}/>
      <Route path='/temperatura' element = {<Temperatura/>}/>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);



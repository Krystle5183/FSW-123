import React from 'react';
import ReactDOM from 'react-dom';
import { render } from "react-dom";
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './routes/About';
import FreeTrial from './routes/FreeTrial';


ReactDOM.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
          <Route path='Home' element={<App />} />
          <Route path='About' element={<About />} />
          <Route path='FreeTrial' element={<FreeTrial />} />
      </Routes>
    </BrowserRouter>,
  document.getElementById('root')
);
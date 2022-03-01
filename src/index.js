import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
import Stocks from './pages/Stocks';
import Nav from './components/nav';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path='/' element={ < Home /> } />
        <Route path='/stocks' element={ < Stocks />} >
          <Route path=':symbol' element= { < Stocks />} />
        </Route>
        <Route path='/about' element = { <About />} />
      </Routes>
    </BrowserRouter>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

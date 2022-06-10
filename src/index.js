import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './header';
import Info from './main-area';
import './index.css';

import reportWebVitals from './reportWebVitals';
import Popular from './popular';
import GridIcon from './grid-icon';
import Grid from './grid';
import Foot from './footer';
import Insta from './insta';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Insta/>
    <Header/>
    <Info/>
    <Popular/>
    <GridIcon/>
    <Grid/>
    <Foot/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

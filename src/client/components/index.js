import 'bootstrap/dist/css/bootstrap.min.css';

// import $ from 'jquery';
// import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../styles/hrs.css';

import React from 'react';
import { hydrate } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './App';

hydrate(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root'),
);

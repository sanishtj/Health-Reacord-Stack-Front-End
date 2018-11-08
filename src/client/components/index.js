import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

// // import $ from 'jquery';
// // import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../styles/hrs.css';

import React from 'react';
import '@babel/polyfill';
import { hydrate } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import configureStore from '../store/configureStore';
import App from './App';

const store = configureStore();

hydrate(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);

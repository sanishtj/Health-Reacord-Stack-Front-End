import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import 'toastr/build/toastr.css';
import 'video.js/dist/video-js.min.css';

import $ from 'jquery';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../styles/hrs.css';

import React from 'react';
import '@babel/polyfill';
import { hydrate } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import configureStore from '../store/configureStore';
import App from './App';

// Grab the state from a global variable injected into the server-generated HTML
const preloadedState = window.initialState;
// Allow the passed state to be garbage-collected
delete window.initialState;

const store = configureStore(preloadedState);

hydrate(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);

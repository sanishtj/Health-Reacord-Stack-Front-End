import express from 'express';
import config from 'config';
import path from 'path';
import { createStore, applyMiddleware } from 'redux';
import reduximmutablestateinvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';
import rootReducer from '../client/reducers/index';

import serverRender from './serverRender';

const app = express();
const port = process.env.PORT || config.get('Server.port');

app.use(express.static('public'));


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));
app.get('/*', (req, res) => {
  // Create a new Redux store instance
  const store = createStore(rootReducer, applyMiddleware(thunk, reduximmutablestateinvariant()));
  // Grab the initial state from our Redux store
  const preloadedState = store.getState();
  const initialContent = serverRender(req.url, store);

  res.render('index', { initialContent, preloadedState });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

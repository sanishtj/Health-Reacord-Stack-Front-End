import express from 'express';
import config from 'config';
import path from 'path';

import serverRender from './serverRender';

const app = express();
const port = process.env.PORT || config.get('Server.port');

app.use(express.static('public'));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));
app.get('/*', (req, res) => {
  const initialContent = serverRender(req.url);
  res.render('index', { initialContent });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

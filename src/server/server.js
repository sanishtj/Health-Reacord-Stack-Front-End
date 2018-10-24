import express from 'express';
import config from 'config';
import path from 'path';

const app = express();
const port = process.env.PORT || config.get('Server.port');

app.use(express.static('public'));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));
app.get('/', (req, res) => {
  res.render('index');
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

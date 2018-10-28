import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';

import App from '../client/components/App';

const serverRender = (url) => {
  const context = {};
  return ReactDOMServer.renderToString(
    <StaticRouter location={url} context={context}>
      <App />
    </StaticRouter>,
  );
};
export default serverRender;

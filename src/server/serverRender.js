import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import App from '../client/components/App';
import ScrollToTop from '../client/components/common/ScrollToTop';

const serverRender = (url, store) => {
  const context = {};
  return ReactDOMServer.renderToString(
    <Provider store={store}>
      <StaticRouter location={url} context={context}>
        <ScrollToTop>
          <App />
        </ScrollToTop>
      </StaticRouter>
    </Provider>,
  );
};
export default serverRender;

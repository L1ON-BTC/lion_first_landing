import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
import GlobalStyle from './globalStyles';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <GlobalStyle />
  </React.StrictMode>,
  document.getElementById('root'),
);

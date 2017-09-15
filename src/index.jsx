import React from 'react';
import ReactDOM from 'react-dom';
import { injectGlobal } from 'styled-components';
import 'sanitize.css/sanitize.css';

import './index.css';
import App from './App';
/* eslint no-unused-expressions: 0 */
injectGlobal`
  html,
  body {
    height: 100%;
    width: 100%;
  }

  html {
      font-size: 62.5%;
  }

  body {
      font-size: 1.6rem;
      padding: 10rem;
      font-family: 'Lato';
  }
`;
ReactDOM.render(<App />, window.document.getElementById('root'));

import 'babel-polyfill';
import 'whatwg-fetch';
import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';

import { render } from 'react-dom';
import App from './components/App';
import '../css/app.css';

render(<App />, document.getElementById('app'));

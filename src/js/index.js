import 'babel-polyfill';
import 'whatwg-fetch';
import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';

import { render } from 'react-dom';
import App from './components/App';
import '../css/app.css';
import reactor from './store/reactor';
import userStore from './store/userStore';
import trackStore from './store/trackStore';

reactor.registerStores();

reactor.registerStores({
  user: userStore,
  tracks: trackStore,
});

render(<App />, document.getElementById('app'));

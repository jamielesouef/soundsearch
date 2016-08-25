import React from 'react';
import { fetchUser, fetchUserTracks } from '../actions/actions';

fetchUser('rave_on');
fetchUserTracks('rave_on');

function App() {
  return (
    <div>
      Hello, World
    </div>
  );
}

App.propTypes = {};
App.defaultProps = {};

export default App;

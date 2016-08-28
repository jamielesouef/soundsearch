import React, { PropTypes } from 'react';
import { connect } from 'nuclear-js-react-addons';

import getters from '../getters/getters';
import Search from './Search';
import TrackContainer from './TrackContainer';
import Header from './Header';

const mapStateToProps = () => ({
  user: getters.user,
  tracks: getters.tracks,
});

const App = ({ user, tracks }) => (
  <div className="container">
    <Header name={user.get('username')} />
    <Search />
    <TrackContainer tracks={tracks} />
  </div>
);

App.propTypes = {
  user: PropTypes.object,
  tracks: PropTypes.object,
};

App.contextTypes = {
  reactor: PropTypes.object.isRequired,
};

export default connect(mapStateToProps)(App);

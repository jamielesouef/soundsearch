import React, { Component, PropTypes } from 'react';
import { connect } from 'nuclear-js-react-addons';
import getters from '../getters/getters';
import TrackContainer from './TrackContainer';
import Search from './Search';

@connect(() => ({
  user: getters.user,
  tracks: getters.tracks,
}))
class App extends Component {

  componentWillMount() {

  }

  render() {

    const { user, tracks } = this.props;

    return (
      <div>
        <div>Hello, {user.get('username')}</div>
        <Search />
        <TrackContainer tracks={tracks} />
      </div>
    );
  }
}

App.propTypes = {
  user: PropTypes.object,
  tracks: PropTypes.object,
};

App.contextTypes = {
  reactor: PropTypes.object.isRequired,
};


export default App;

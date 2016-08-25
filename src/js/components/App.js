import React, { Component, PropTypes } from 'react';
import { connect } from 'nuclear-js-react-addons';
import { fetchUser } from '../actions/actions';
import getters from '../getters/getters';

@connect(() => ({
  user: getters.user,
}))
class App extends Component {

  componentWillMount() {
    fetchUser('rave_on');
  }

  render() {

    const { user } = this.props

    return (
      <div>
        Hello, {user.get('username')}
      </div>
    );
  }
}

// const App = React.createClass({
//   mixins: [reactor.ReactMixin],
//

// });


App.propTypes = {};
App.contextTypes = {
  reactor: PropTypes.object.isRequired,
};

App.defaultProps = {};

export default App;

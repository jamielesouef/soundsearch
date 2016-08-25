import { Store, toImmutable } from 'nuclear-js';
import actions from '../actions/actionTypes';

const receiveUser = (state, { user }) => {
  console.debug('receiveUser', user);
  return toImmutable(user);
};

export default Store({
  getInitialState() {
    return toImmutable({});
  },

  initialize() {
    this.on(actions.RECEIVE_USER, receiveUser);
  },
});

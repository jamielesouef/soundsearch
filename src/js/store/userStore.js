import { Store, toImmutable } from 'nuclear-js';
import actions from '../actions/actionTypes';

const initialState = toImmutable({});

const resetUser = () => initialState;

const receiveUser = (state, { user }) => toImmutable(user);

export default Store({
  getInitialState() {
    return initialState;
  },

  initialize() {
    this.on(actions.RECEIVE_USER, receiveUser);
    this.on(actions.RESET_USER, resetUser);
  },
});

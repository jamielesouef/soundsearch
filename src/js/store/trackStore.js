import { Store, toImmutable } from 'nuclear-js';
import actions from '../actions/actionTypes';

const receiveTracks = (state, { tracks }) => {
  console.debug('receiveTracks tracks', tracks);
  return toImmutable(tracks);
};

export default Store({
  getInitialState() {
    return toImmutable({});
  },

  initialize() {
    this.on(actions.RECEIVE_TRACKS, receiveTracks);
  },
});

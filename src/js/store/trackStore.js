import { Store, toImmutable } from 'nuclear-js';
import actions from '../actions/actionTypes';

const initialState = toImmutable([]);

const receiveTracks = (state, { tracks }) => toImmutable(tracks.collection);

const resetTracks = () => initialState;

export default Store({
  getInitialState() {
    return initialState;
  },

  initialize() {
    this.on(actions.RESET_TRACKS, resetTracks);
    this.on(actions.RECEIVE_TRACKS, receiveTracks);
  },
});

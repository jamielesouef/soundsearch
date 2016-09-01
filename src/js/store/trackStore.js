import { Store, toImmutable } from 'nuclear-js';
import actions from '../actions/actionTypes';

const initialState = toImmutable({
  filter: '',
  tracks: [],
});

const receiveTracks = (state, { tracks }) => state.set('tracks', tracks.collection);

const setTrackFilter = (state, filter) => state.set('filter', filter);

const resetTracks = () => initialState;

export default Store({
  getInitialState() {
    return initialState;
  },

  initialize() {
    this.on(actions.RESET_TRACKS, resetTracks);
    this.on(actions.RECEIVE_TRACKS, receiveTracks);
    this.on(actions.FILTER_TRACKS, setTrackFilter);
  },
});

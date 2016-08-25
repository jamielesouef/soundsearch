import { Store, toImmutable } from 'nuclear-js';
import actions from '../actions/actionTypes';

const initialState = toImmutable({
  _original: [],
  collection: [],
});

const receiveTracks = (state, { tracks }) => (
  toImmutable({
    _original: tracks.collection,
    collection: tracks.collection,
  })
);

const filterTracks = (state, filter) => {

  const newState = state.toJS();

  newState.collection = newState._original.filter(track => track.title.toLowerCase().indexOf(filter.toLowerCase()) !== -1);

  return toImmutable(newState);
};

const resetTracks = () => initialState;

export default Store({
  getInitialState() {
    return initialState;
  },

  initialize() {
    this.on(actions.RESET_TRACKS, resetTracks);
    this.on(actions.RECEIVE_TRACKS, receiveTracks);
    this.on(actions.FILTER_TRACKS, filterTracks);
  },
});

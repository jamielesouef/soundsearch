import reactor from '../store/reactor';
import soundCloudResource from '../Resource/soundCloudResource';
import actions from './actionTypes';

const fetchUser = (userName) => {
  soundCloudResource.user(userName).then(user => {
    reactor.dispatch(actions.RECEIVE_USER, { user });
  }).catch(() => {
    actions.dispatch(actions.RESET_USER);
  });
};

const fetchUserTracks = (userName) => {
  soundCloudResource.userTracks(userName).then(tracks => {
    reactor.dispatch(actions.RECEIVE_TRACKS, { tracks });
  }).catch(() => {
    reactor.dispatch(actions.RESET_TRACKS);
  });
};

const search = (userName) => {
  reactor.batch(() => {
    reactor.dispatch(actions.RESET_TRACKS);
    reactor.dispatch(actions.RESET_USER);

    fetchUser(userName);
    fetchUserTracks(userName);
  });
};

const filter = (filterLookup) => {
  reactor.dispatch(actions.FILTER_TRACKS, filterLookup);
};

export default {
  fetchUser,
  fetchUserTracks,
  search,
  filter,
};

import reactor from '../store/reactor';
import soundCloudResource from '../Resource/soundCloudResource';
import actions from './actionTypes';

export function fetchUser(userName) {
  soundCloudResource.user(userName).then(user => {
    reactor.dispatch(actions.RECEIVE_USER, { user });
  }).catch(() => {
    actions.dispatch(actions.RESET_USER);
  });
}

export function fetchUserTracks(userName) {
  soundCloudResource.userTracks(userName).then(tracks => {
    reactor.dispatch(actions.RECEIVE_TRACKS, { tracks });
  }).catch(() => {
    reactor.dispatch(actions.RESET_TRACKS);
  });
}

export function search(userName) {
  reactor.batch(() => {
    reactor.dispatch(actions.RESET_TRACKS);
    reactor.dispatch(actions.RESET_USER);

    fetchUser(userName);
    fetchUserTracks(userName);
  });
}

export function filter(filterLookup) {
  reactor.dispatch(actions.FILTER_TRACKS, filterLookup);
}

import reactor from '../store/reactor';
import soundCloudResource from '../Resource/soundCloudResource';
import actions from './actionTypes';

export function fetchUser(userName) {
  soundCloudResource.user(userName).then(user => {
    reactor.dispatch(actions.RECEIVE_USER, { user });
  });
}

export function fetchUserTracks(userName) {
  soundCloudResource.userTracks(userName).then(tracks => {
    reactor.dispatch(actions.RECEIVE_TRACKS, { tracks });
  });
}

export default {
  fetchUser,
  fetchUserTracks,
};

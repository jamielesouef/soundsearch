import constants from '../constants';
import { apiBulder } from '../utils/apiUtils';

function checkStatus(response) {
  if (!(response.status >= 200 && response.status < 300)) {
    const error = new Error(response.statusText);
    error.response = response;
    throw error;
  }

  return response;
}

const parseJSON = response => response.json();

function query(url) {
  return fetch(url)
    .then(checkStatus)
    .then(parseJSON);
}

function user(userName) {

  const requestUrl = `${constants.SOUND_CLOUD_API}/users/${userName}`;

  return query(apiBulder(requestUrl));
}

function userTracks(userName, args = {}) {

  const requestUrl = `${constants.SOUND_CLOUD_API}/users/${userName}/tracks`;
  const requestArgs = Object.assign({}, {
    limit: constants.MAX_RESULTS,
    linked_partitioning: 1,
  }, args);

  return query(apiBulder(requestUrl, requestArgs));

}

export default {
  user,
  userTracks,
};

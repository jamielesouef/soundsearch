import constants from '../constants';

export function paramsToQueryString(params = {}) {
  const mutatedParams = Object.assign({ client_id: constants.CLIENT_ID }, params);
  const string = Object.keys(mutatedParams).map(key => `${key}=${mutatedParams[key]}`).join('&');
  return `?${string}`;
}

export function apiBulder(url, params) {
  return `${url}${paramsToQueryString(params)}`;
}

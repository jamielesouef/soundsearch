const filterTracks = trackStore => {
  const term = trackStore.get('filter').toLowerCase();
  const filter = track => track.title.toLowerCase().indexOf(term) !== -1;
  return trackStore.get('tracks').filter(filter);
};

const user = ['user'];
const tracks = [['tracks'], filterTracks];

export default {
  user,
  tracks,
};

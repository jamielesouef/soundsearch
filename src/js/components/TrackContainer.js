import React, { PropTypes } from 'react';
import Track from './Track';

function TrackContainer(props) {

  const { tracks } = props;

  console.debug('tracks', tracks);
  if (!tracks.size) {
    return null;
  }

  return (
    <div>
      {tracks.map((track, index) => <Track track={track.toJS()} key={index} />)}
    </div>
  );
}

TrackContainer.propTypes = {
  tracks: PropTypes.object.isRequired,
};
TrackContainer.defaultProps = {};

export default TrackContainer;

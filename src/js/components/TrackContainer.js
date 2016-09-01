import React, { PropTypes } from 'react';
import Track from './Track';

function TrackContainer(props) {
  const { tracks } = props;

  return (
    <div>
      {tracks.map((track, index) => <Track track={track} key={index} />)}
    </div>
  );
}

TrackContainer.propTypes = {
  tracks: PropTypes.object.isRequired,
};
TrackContainer.defaultProps = {};

export default TrackContainer;

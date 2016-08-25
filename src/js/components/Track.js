import React, { PropTypes } from 'react';

function Track(props) {

  const { track } = props;
  return (
    <div>
      {track.title}
    </div>
  );
}

Track.propTypes = {
  track: PropTypes.object.isRequired,
};
Track.defaultProps = {};

export default Track;

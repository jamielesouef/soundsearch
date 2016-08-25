import React, { PropTypes } from 'react';

function Track(props) {

  const { track } = props;
  return (
    <div>
      {track.get('title')}
    </div>
  );
}

Track.propTypes = {
  track: PropTypes.func.isRequried,
};
Track.defaultProps = {};

export default Track;

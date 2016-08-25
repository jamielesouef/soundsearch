import React, { PropTypes } from 'react';

function Header({ name }) {
  console.debug('****** render');
  return (
    <div>
      Hello, {name}
    </div>
  );
}

Header.propTypes = {
  name: PropTypes.string,
};

export default Header;

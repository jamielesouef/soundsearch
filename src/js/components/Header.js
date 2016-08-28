import React, { PropTypes } from 'react';

function Header() {
  console.debug('****** render');
  return (
    <div className="row">
      <Nav />
    </div>
  );
}

const Nav = () => (
  <div className="col-xs-12"><h1>SC Search</h1></div>
);

Header.propTypes = {
  name: PropTypes.string,
};

export default Header;

import React, { PropTypes, PureComponent } from 'react';

class Header extends PureComponent {

  myFunc = () => {

  }

  render() {
    return (
      <div className="row">
        <div className="col-xs-12"><h1>Search Soundcloud</h1></div>
      </div>
    );
  }
}

Header.propTypes = {
  name: PropTypes.string,
};

export default Header;

import React, { PropTypes, PureComponent } from 'react';

class Header extends PureComponent {
  render() {
    return (
      <div className="row">
        <div className="col-xs-12"><h1>SC Search</h1></div>
      </div>
    );
  }
}

Header.propTypes = {
  name: PropTypes.string,
};

export default Header;

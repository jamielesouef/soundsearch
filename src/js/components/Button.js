import React, { PropTypes } from 'react';
import styles from './Button.scss';

const Button = ({ onClick, className, children }) => {
  const classes = [className, 'btn btn-default', styles.button].join(' ');
  return (<button className={classes}
                  onClick={onClick} >{ children }</button>);
};

Button.propTypes = {
  onClick: PropTypes.func,
  className: PropTypes.string,
  children: PropTypes.object,
};
Button.defaultProps = {
  onClick: () => '',
  children: {},
};

export default Button;

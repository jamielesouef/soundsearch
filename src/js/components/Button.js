import React, { PropTypes } from 'react';
import { toClassString } from '../utils/cssUtils.js';
import styles from './Button.scss';

const Button = ({ onClick, className, children }) => {
  const classes = toClassString(className, 'btn btn-default', styles.button);
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

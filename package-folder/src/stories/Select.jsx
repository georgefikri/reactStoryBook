import React from 'react';
import PropTypes from 'prop-types';
import './select.css';

/**
 * Primary UI component for user interaction
 */
export const Select = ({ primary, backgroundColor, size, label, ...props }) => {
  const mode = primary ? 'storybook-select--primary' : 'storybook-select--secondary';
  return (
    <select
      type="select"
      className={['storybook-select', `storybook-select--${size}`, mode].join(' ')}
      style={backgroundColor && { backgroundColor }}
      {...props}
    >
      {label}
    </select>
  );
};

Select.propTypes = {
  /**
   * Is this the principal call to action on the page?
   * */
  primary: PropTypes.bool,
  /**
   * What background color to use
   * */
  backgroundColor: PropTypes.string,
  /**
   * How large should the button be?
   * */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * Button contents
   * */
  label: PropTypes.string.isRequired,
  /**
   * Optional click handler
   * */
  onClick: PropTypes.func,
};

Select.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: 'medium',
  onClick: undefined,
};

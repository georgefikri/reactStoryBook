import React from 'react';
import PropTypes from 'prop-types';
import './input.css';

/**
 * Primary UI component for user input
 */
export const Input = ({ label, type, ...props }) => {
  return (
    <div className="storybook-input">
      <label className="storybook-input-label">{label}</label>
      <input type={type} className="storybook-input-field" {...props} />
    </div>
  );
};

Input.propTypes = {
  /**
   * Input label
   */
  label: PropTypes.string.isRequired,
  /**
   * Input type
   */
  type: PropTypes.string,
};

Input.defaultProps = {
  type: 'text',
};

export default Input;

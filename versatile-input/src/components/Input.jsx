// src/components/Input.jsx
import React from 'react';
import PropTypes from 'prop-types';
import { useField } from 'formik';
import './Input.css'; // Optional: Custom styling

const Input = ({ label, type, name, placeholder, className, ...props }) => {
  const [field, meta] = useField(name);

  return (
    <div className={`input-wrapper ${className}`}>
      {label && <label htmlFor={name}>{label}</label>}
      <input
        id={name}
        type={type}
        placeholder={placeholder}
        {...field}
        {...props}
        className={`input ${meta.touched && meta.error ? 'input-error' : ''}`}
      />
      {meta.touched && meta.error ? (
        <div className="error-message">{meta.error}</div>
      ) : null}
    </div>
  );
};

Input.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  className: PropTypes.string,
};

Input.defaultProps = {
  type: 'text',
  placeholder: '',
  className: '',
};

export default Input;

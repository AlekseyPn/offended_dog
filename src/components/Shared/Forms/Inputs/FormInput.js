import PropTypes from 'prop-types';
import classes from './FormInput.module.css';
import React from 'react';
import classNames from 'classnames';

export const FormInput = React.forwardRef(function FormInput(
  {
    type,
    label,
    onChange,
    id,
    additionalClass,
    error,
    errorText,
    value,
    children,
    disabled,
  },
  ref
) {
  const inputType = type || 'text';

  const componentClasses = classNames([
    classes.label,
    additionalClass,
    {
      [classes.error]: !!error || !!errorText,
    },
  ]);

  const errorId = `error${id}`;

  return (
    <label htmlFor={id} className={componentClasses}>
      {label}
      <div className={classes.inputWrapper}>
        <input
          ref={ref}
          type={inputType}
          id={id}
          onChange={onChange}
          className={classes.input}
          value={value}
          disabled={disabled}
          aria-invalid={!!error}
          aria-errormessage={errorId}
        />
        {children}
      </div>
      {error && (
        <span id={errorId} className={classes.errorText}>
          {errorText}
        </span>
      )}
    </label>
  );
});

FormInput.propTypes = {
  onChange: PropTypes.func,
  type: PropTypes.string,
  label: PropTypes.string,
  id: PropTypes.string.isRequired,
  additionalClass: PropTypes.string,
  error: PropTypes.bool,
  errorText: PropTypes.string,
  value: PropTypes.any.isRequired,
  disabled: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

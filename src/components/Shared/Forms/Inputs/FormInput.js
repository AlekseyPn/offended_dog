import PropTypes from 'prop-types';
import classes from './FormInput.module.css';
import React from 'react';
import classNames from 'classnames';

export const FormInput = React.forwardRef(function FormInput(
  {
    type,
    label,
    onInput,
    id,
    additionalClass,
    error,
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
      [classes.error]: !!error,
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
          onInput={onInput}
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
          {error}
        </span>
      )}
    </label>
  );
});

FormInput.propTypes = {
  onInput: PropTypes.func,
  type: PropTypes.string,
  label: PropTypes.string,
  id: PropTypes.string.isRequired,
  additionalClass: PropTypes.string,
  error: PropTypes.string,
  value: PropTypes.any.isRequired,
  disabled: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

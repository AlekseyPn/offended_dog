import PropTypes from 'prop-types';
import classes from './FormButton.module.css';
import classNames from 'classnames';

export const ViewTypes = {
  Icon: 'icon',
};

export function FormButton({
  children,
  type,
  onClick,
  additionalClass,
  viewType,
}) {
  const componentClasses = classNames(
    [classes.btn, additionalClass].filter(Boolean),
    {
      [classes.icon]: viewType === ViewTypes.Icon,
    }
  );

  return (
    <button className={componentClasses} type={type} onClick={onClick}>
      {children}
    </button>
  );
}

FormButton.defaultProps = {
  type: 'button',
};

FormButton.propTypes = {
  type: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  onClick: PropTypes.func,
  additionalClass: PropTypes.string,
  viewType: PropTypes.oneOf(Object.values(ViewTypes)),
};

import { FormButton, ViewTypes } from './FormButton';
import { Icon } from '../../Icon/Icon';
import PropTypes from 'prop-types';

export function FormIconButton({
  iconName,
  iconSize,
  onClick,
  additionalClass,
}) {
  return (
    <FormButton
      additionalClass={additionalClass}
      onClick={onClick}
      viewType={ViewTypes.Icon}
    >
      <Icon name={iconName} size={iconSize} />
    </FormButton>
  );
}

FormIconButton.propTypes = {
  iconName: PropTypes.string,
  onClick: PropTypes.func,
  iconSize: PropTypes.number,
  additionalClass: PropTypes.string,
};

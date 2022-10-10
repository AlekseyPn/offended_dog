import { FormInput } from './FormInput';
import { FormIconButton } from '../Buttons/FormIconButton';
import classes from './FormInputPassword.module.css';
import { useEffect, useState } from 'react';

export function FormInputPassword(props) {
  let [isHidden, setIsHidden] = useState(true);
  let [iconName, setIconName] = useState('eye');
  let [type, setType] = useState('password');

  useEffect(() => {
    if (isHidden) {
      setIconName('eye');
      setType('password');
    } else {
      setIconName('eye-off');
      setType('text');
    }
  }, [isHidden]);

  function onToggleTypeClick() {
    setIsHidden(!isHidden);
  }

  return (
    <FormInput {...props} type={type}>
      <FormIconButton
        additionalClass={classes.toggleTypeBtn}
        iconName={iconName}
        onClick={onToggleTypeClick}
      />
    </FormInput>
  );
}

import classes from './components/Login/Login.module.css';
import logo from './assets/logo.svg';
import { FormInput } from './components/Shared/Forms/Inputs/FormInput';
import { useEffect, useRef } from 'react';
import { FormInputPassword } from './components/Shared/Forms/Inputs/FormInputPassword';
import { FormButton } from './components/Shared/Forms/Buttons/FormButton';

function App() {
  function onSubmit(event) {
    event.preventDefault();
  }
  const textInput = useRef(null);

  useEffect(() => {
    textInput.current.focus();
  }, []);

  return (
    <section className={classes.container}>
      <div className={classes.logo}>
        <img src={logo} alt="Dog" className={classes.logoImg} />
      </div>
      <h1 className={classes.title}>Hello my little friend!</h1>
      <form onSubmit={onSubmit} className={classes.form}>
        <FormInput
          ref={textInput}
          id="login"
          additionalClass={classes.formItem}
          label="Enter your nickname"
          type="text"
        />
        <FormInputPassword
          id="password"
          additionalClass={classes.formItem}
          label="Enter your password"
        />
        <FormButton type="submit">Sign in</FormButton>
      </form>
    </section>
  );
}

export default App;

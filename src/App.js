function App() {
  function onSubmit(event) {
    event.preventDefault();
  }

  return (
    <section>
      <form onSubmit={onSubmit}>
        <label htmlFor="login">
          Enter your nickname
          <input type="text" id="login" />
        </label>
        <label htmlFor="password">
          Enter your password
          <input type="password" id="password" />
        </label>
        <button type="submit">Sign in</button>
      </form>
    </section>
  );
}

export default App;

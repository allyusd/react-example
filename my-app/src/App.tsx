import React, { ReactNode, createContext, useContext, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Profile from './component/Profile';
import MyButton from './component/MyButton';

const ThemeContext = createContext('');

function Form() {
  return (
    <Panel title="Welcome">
      <Button>Sign up</Button>
      <Button>Log in</Button>
    </Panel>
  );
}

function Panel({ title, children }: { title:string, children: ReactNode }) {
  const theme = useContext(ThemeContext);
  const className = 'panel-' + theme;
  return (
    <section className={className}>
      <h1>{title}</h1>
      <h2>{theme}</h2>
      {children}
    </section>
  )
}

function Button({ children }: { children: ReactNode }) {
  const theme = useContext(ThemeContext);
  const className = 'button-' + theme;
  return (
    <button className={className}>
      {children}
    </button>
  );
}

function App() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <MyButton count={count} onClick={handleClick} />
        <MyButton count={count} onClick={handleClick} />
        <Profile />
      </header>
      <ThemeContext.Provider value="light">
        <Form />
      </ThemeContext.Provider>
    </div>
  );
}

export default App;

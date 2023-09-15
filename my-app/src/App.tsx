import { ReactNode, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Profile from './component/Profile';
import MyButton from './component/MyButton';
import useTheme, { ThemeProvider } from './context/ThemeContext';

function Form() {
  return (
    <Panel title="Welcome">
      <Button>Sign up</Button>
      <Button>Log in</Button>
    </Panel>
  );
}

function Panel({ title, children }: { title:string, children: ReactNode }) {
  const className = 'panel-' + useTheme();
  return (
    <section className={className}>
      <h1>{title}</h1>
      <h2>{useTheme()}</h2>
      {children}
    </section>
  )
}

function Button({ children }: { children: ReactNode }) {
  const className = 'button-' + useTheme();
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
      <ThemeProvider>
        <Form />
      </ThemeProvider>
    </div>
  );
}

export default App;

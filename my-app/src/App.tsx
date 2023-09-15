import './App.css';
import { ThemeProvider } from './context/ThemeContext';
import Home from './component/Home';
import Form from './component/Form';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Home />
        <ThemeProvider>
          <Form />
        </ThemeProvider>      
      </header>
    </div>
  );
}

export default App;

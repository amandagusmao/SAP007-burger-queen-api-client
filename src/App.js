import logo from './logo.svg';
import './App.css';
import Button from './components/Button/Button';
import TestAPI from './components/TestAPI/TestAPI';

function App() {
  const onLoginClick = () => {
    console.log('cliquei no login');
  }

  const onSignupClick = () => {
    console.log('cliquei no registro');
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <Button title="Login" onClick={onLoginClick} />
        <Button title="Registrar-se" onClick={onSignupClick} />

        <TestAPI />
      </header>
    </div>
  );
}

export default App;

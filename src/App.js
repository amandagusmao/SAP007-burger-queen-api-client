import logo from './logo_bq.png';
import './App.css';
import Button from './components/Button/Button';
import TestAPI from './components/TestAPI/TestAPI';

function App() {
  const onLoginClick = () => {
    console.log('cliquei no login');
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          SERVICE SYSTEM
        </p>
        <form className="Check-App">
          <label>
            <input type="checkbox"/>
            Garçom
          </label>
          <label>
            <input type="checkbox"/>
            Cozinha
          </label>
        </form>
        <div className="Input-App">
          <div>
            <input type="email" placeholder="exemplo@exemplo.com"/>
            <i class="ph-envelope"></i>
          </div>
        </div>
        <div className="Input-App">
          <div>
            <input type="password"/>
            <i class="ph-lock-key"></i>
          </div>
        </div>

        <TestAPI />
      </header>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import { Garchomp } from './components/Garchomp';
import { Input } from './components/Input';




function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <Garchomp></Garchomp>
        <Input></Input>
      </header>
    </div>
  );
}

export default App;

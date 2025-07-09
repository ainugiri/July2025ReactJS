import logo from './logo.svg';
import './App.css';
import Comp1 from './Components/FunC1/Comp1';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h6><Comp1 name='Giri' age={30} /></h6>
      </header>
    </div>
  );
}
export default App;

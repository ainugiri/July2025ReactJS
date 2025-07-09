// import logo from './logo.svg';
import './App.css';
import FuncComA from './Components/FuncComA';
import FuncComB from './Components/CompB';
import { Car, Bike, Cycle } from './Components/MultiComponent';
import Greetings from './Components/Greetings';
function App() {
  return(
    <>
      <FuncComA />
      <FuncComB name="Giri" />
      <FuncComB name="React" />
      <FuncComB name="Functional Component" />
      <FuncComB name="Prasad" />
      <Car />
      <Bike />
      <Cycle />
      <Greetings name='Giri' age={30} />
      <Greetings name='Prasad' />
      <Greetings age = {40} />
      <Greetings />

    </>
  )
}

export default App;

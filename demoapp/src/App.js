// import logo from './logo.svg';
import './App.css';
import FuncComA from './Components/FuncComA';
import FuncComB from './Components/CompB';
import { Car, Bike, Cycle } from './Components/MultiComponent';
import Greetings from './Components/Greetings';
import {ClassComp1, ClassComp2} from './Components/ClassComp1';
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
      <ClassComp1 />
      <ClassComp2 name = 'Steve' exp = {5} />
      <ClassComp2 name = 'Rose' exp = {3} />
      <ClassComp2 name = 'Althaf' exp = {4} />
      <ClassComp2 name = 'Giri' exp = {2} />
      <ClassComp2 />
    </>
  )
}

export default App;

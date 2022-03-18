import logo from './logo.svg';
import './App.css';
import Personcard from './components/PersonCard';

function App() {
  return (
    <div className="App">
      <Personcard
        firstName = {"Jane"}
        lastName = {"Doe"}
        age = {45}
        hairColor = {"Black"}
      />
      <br/>

      <Personcard
        firstName = {"John"}
        lastName = {"Smith"}
        age = {88}
        hairColor = {"Brown"}
      />
      <br/>

      <Personcard
        firstName = {"Millard"}
        lastName = {"Fillmore"}
        age = {50}
        hairColor = {"Brown"}
      />
      <br/>

      <Personcard
        firstName = {"Maria"}
        lastName = {"Smith"}
        age = {62}
        hairColor = {"Brown"}
      />
      
    </div>
  );
}

export default App;

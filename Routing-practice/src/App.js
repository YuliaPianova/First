import './App.css';
import Home from './components/Home';
import ParamsComponent from './components/ParamsComponent';
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <div className="App">

      <Routes>
        
        <Route element={<Home />} path="/home"/>
      
        <Route element={<ParamsComponent />} path="/:anyWord" />
        
        <Route element={<ParamsComponent />} path="/:anyWord/:anyColor/:backGroundColor" />
        
      </Routes>

    </div>
    </BrowserRouter>
  );
}

export default App;
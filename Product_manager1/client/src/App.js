import logo from './logo.svg';
import './App.css';

import CreateNewProduct from "./components/CreateProductComponent";
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (

    <BrowserRouter>
      <div className="App">

        <Routes>

          <Route element={<CreateNewProduct />} path="/" />

        
        </Routes>

      </div>
    </BrowserRouter>




  );
}

export default App;








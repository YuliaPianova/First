import logo from './logo.svg';
import './App.css';

import Main from './views/Main';
import OneProduct from "./components/OneProduct";
import UpdateProduct from "./components/UpdateProduct";


import {BrowserRouter, Routes, Route} from "react-router-dom";


function App() {
  return (

    <BrowserRouter>
      <div className="App">

        <Routes>

          <Route element={<Main />} path="/" />
          <Route element={<OneProduct/>} path="/products/:productId" />
          <Route element={<UpdateProduct/>} path="/products/edit/:productId" />

        
        </Routes>

      </div>
    </BrowserRouter>




  );
}

export default App;








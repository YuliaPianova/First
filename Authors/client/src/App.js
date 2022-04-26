
import './App.css';

import AllAuthors from "./components/AllAuthors";
import CreateNewAuthor from "./components/CreateNewAuthor";
import UpdateAuthor from "./components/UpdateAuthor";

import {BrowserRouter, Routes, Route} from "react-router-dom";


function App() {
  return (

    <BrowserRouter>
      <div className="App">

        <Routes>

          <Route element = {<AllAuthors />} path = "/" />
          <Route element = {< CreateNewAuthor/>} path = "/new"/>
          <Route element={<UpdateAuthor/>} path="/edit/:authorId" />

        
        </Routes>

      </div>
    </BrowserRouter>




  );
}

export default App;








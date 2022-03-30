
import "./App.css";
import axios from "axios";
import React, { useEffect, useState } from "react";
function App() {
  const [pokemonData, setPokemonData] = useState([]);
  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=807")
      .then((response) => {
        console.log(response.data.results);
        setPokemonData(response.data.results);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="App">
      <h1 style= {{color: "darkgreen"}}>List of Pokemon names:</h1>
      <ul className="Ul">
        {pokemonData.map((pokemon, index) => (
          <li key={index}>{pokemon.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
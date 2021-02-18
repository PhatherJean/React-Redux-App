import React, { useState, useEffect } from "react";

import "./App.css";
import axios from "axios";
import PokeImage from "./components/PokeImage";

function App() {
  const [pokeData, setPokeData] = useState([]);

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=9&offset=0")
      .then((res) => setPokeData(res.data.results))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="App">
      <div className="poke-container">
        {pokeData.map((poke) => (
          <PokeImage key={poke.id} poke={poke} />
        ))}
      </div>
    </div>
  );
}

export default App;

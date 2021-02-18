import React, { useEffect } from "react";

import "./App.css";

import PokeImage from "./components/PokeImage";
import { getPokemon } from "./action";
import { connect } from "react-redux";

function App(props) {
  console.log(props);

  useEffect(() => {
    getPokemon();
  }, []);

  if (props.error) {
    return <h3>Oooohhhh Man so close to but : {props.error}</h3>;
  }

  if (props.isLoading) {
    return <h2>Loading the Pokedex ..... </h2>;
  }
  return (
    <div className="App">
      <button onClick={() => props.getPokemon()}>My Pokemon </button>;
      <div className="poke-container">
        {props.pokemon.map((poke) => (
          <PokeImage key={poke.id} poke={poke} />
        ))}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    pokemon: state.pokemon,
    isLoading: state.isLoading,
    error: state.error,
  };
};

export default connect(mapStateToProps, { getPokemon })(App);

import React, { useState } from "react";
import "./style.scss";

function PokemonCollection() {
  return (
    <div className="container">
      <h1>Pokedex</h1>
      <div className="list">
        <div className="pokemon">
          <div className="pokemon-content">
            <h2 className="pokemon-name">Pikachu</h2>
            <p>
              Whenever Pikachu comes across something new, it blasts it with a jolt of electricity. If you come across a
              blackened berry, it's evidence that this Pokémon mistook the intensity of its charge.
            </p>
          </div>
        </div>
        <div className="pokemon">
          <div className="pokemon-content">
            <h2 className="pokemon-name">Pikachu</h2>
            <p>
              Whenever Pikachu comes across something new, it blasts it with a jolt of electricity. If you come across a
              blackened berry, it's evidence that this Pokémon mistook the intensity of its charge.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PokemonCollection;

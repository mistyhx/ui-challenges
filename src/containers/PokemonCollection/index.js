import React, { useState, useRef } from "react";
import { useSprings, animated } from "react-spring";
import { useGesture, useDrag } from "react-use-gesture";
import { FiAlignLeft, FiSearch } from "react-icons/fi";
import "./style.scss";

const pokemons = [
  {
    id: 1,
    name: "Pikachu",
    type: "Electrical",
    description:
      "Whenever Pikachu comes across something new, it blasts it with a jolt of electricity. If you come across a" +
      " blackened berry, it's evidence that this Pokémon mistook the intensity of its charge.",
    url:
      "http://vignette2.wikia.nocookie.net/epic-rap-battles-of-cartoons/images/e/e1/025Pikachu_OS_anime_4.png/revision/latest?cb=20141027015355",
    color: "#ffd622",
  },

  {
    id: 2,
    name: "Bulbasaur",
    type: "Grass",
    description:
      "Bulbasaur can be seen napping in bright sunlight. There is a seed on its back. By soaking up the sun's rays, the seed grows progressively larger.",
    url: "https://ejero001.files.wordpress.com/2015/05/bulbasaur.png",
    color: "#7EC8AC",
  },
];

function PokemonCollection({ width = 10 }) {
  const [springs, set] = useSprings(pokemons.length, i => ({
    opacity: 0,
    x: i * width,
    scale: 1,
    config: { mass: 10 },
  }));
  set(i => ({ opacity: 1 }));

  const bind = useDrag(({ down }) => {
    console.log(down);
    set(i => ({ scale: down ? 1.1 : 1 }));
  });

  return (
    <div className="container">
      <div className="header">
        <FiAlignLeft size={24} />
        <h1>Pokedex</h1>
        <FiSearch size={24} />
      </div>
      <div className="list">
        {springs.map(({ opacity, scale, x }, i) => (
          <animated.div
            {...bind()}
            key={i}
            style={{ opacity: opacity, transform: x.interpolate(x => `translate3d(${x}px,0,0)`) }}
          >
            {console.log(scale)}
            <animated.div
              className="pokemon"
              style={{ backgroundColor: pokemons[i].color, transform: scale.interpolate(scale => `scale(${scale})`) }}
            >
              <div className="pokemon-image">
                <img alt="Pokemon" src={pokemons[i].url} height="220" />
              </div>
              <div className="pokemon-content">
                <h2 className="pokemon-name">{pokemons[i].name}</h2>
                <p>{pokemons[i].description}</p>
              </div>
            </animated.div>
          </animated.div>
        ))}
      </div>
    </div>
  );
}

export default PokemonCollection;

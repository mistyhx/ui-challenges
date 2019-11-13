import React from "react";
import "./App.css";
import CreditCardInfo from "./containers/CreditCardInfo";
import StackedCards from "./containers/StackedCards";
import PokemonCollection from "./containers/PokemonCollection";

function App() {
  return (
    <div className="App">
      {/*<CreditCardInfo />*/}
      {/*<StackedCards />*/}
      <PokemonCollection />
    </div>
  );
}

export default App;

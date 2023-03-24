import { useEffect, useState } from "react";
import './styles/App.css';
import PokemonCard from "./components/PokemonCard";
import pokedexData from './data/pokedex.json';
import { mapPokemonIdToImageFilename } from "./utilities";
import PokemonCardContainer from "./components/PokemonCardContainer";

function App() {
  const [data, setData] = useState([]);

  /* Load pokedex data from pokedex.json into component */
  useEffect(() => {
    setData(pokedexData);
  }, []);

  return (
    <div className="App">
      <h1>Pokedex</h1>
      <PokemonCardContainer>
      {
        data.map((pokemon, index) => (
          <PokemonCard 
            key={index}
            name={pokemon.name.english}
            picture={mapPokemonIdToImageFilename(pokemon.id)}
            types={pokemon.type}
          />
        ))
      }
      </PokemonCardContainer>
    </div>
  );
}

export default App;

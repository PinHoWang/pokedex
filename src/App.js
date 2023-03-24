import { useEffect, useState } from "react";
import './styles/App.css';
import PokemonCard from "./components/PokemonCard";
import pokedexData from './data/pokedex.json';
import { mapPokemonIdToImageFilename } from "./utilities";
import PokemonCardContainer from "./components/PokemonCardContainer";

function App() {
  const [data, setData] = useState([]);
  const [nameFilter, setNameFilter] = useState('');
  const [typeFilter, setTypeFilter] = useState('');

  /* Load pokedex data from pokedex.json into component */
  useEffect(() => {
    setData(pokedexData);
  }, []);

  /* Filter the pokemon data by giving name and type */
  const filteredData = data.filter(pokemon => 
    pokemon.name.english.toLowerCase().indexOf(nameFilter.toLowerCase()) !== -1 &&
    pokemon.type.filter(pokemonType => pokemonType.toLowerCase().includes(typeFilter.toLowerCase())).length !== 0
  );

  return (
    <div className="App">
      <h1>Pokedex</h1>
      <div className="input-area">
        <span>Filter by name: </span>
        <input type="text" placeholder="Filter by name" onChange={(e) => setNameFilter(e.target.value)} />
        <span>Filter by type: </span>
        <input type="text" placeholder="Filter by type" onChange={(e) => setTypeFilter(e.target.value)} />
      </div>
      <PokemonCardContainer>
      {
        filteredData.map((pokemon, index) => (
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

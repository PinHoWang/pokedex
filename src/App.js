import { useEffect, useState } from "react";
import './styles/App.css';
import PokemonCard from "./components/PokemonCard";
import pokedexData from './data/pokedex.json';
import { mapPokemonIdToImageFilename } from "./utilities";
import PokemonCardContainer from "./components/PokemonCardContainer";
import PaginationContainer from "./components/PaginationContainer";

const pokemonsPerPage = 9;

function App() {
  const [data, setData] = useState([]);
  const [nameFilter, setNameFilter] = useState('');
  const [typeFilter, setTypeFilter] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  /* Load pokedex data from pokedex.json into component */
  useEffect(() => {
    setData(pokedexData);
  }, []);

  /* Filter the pokemon data by giving name and type */
  const filteredData = data.filter(pokemon => 
    pokemon.name.english.toLowerCase().indexOf(nameFilter.toLowerCase()) !== -1 &&
    pokemon.type.filter(pokemonType => pokemonType.toLowerCase().includes(typeFilter.toLowerCase())).length !== 0
  );

  const handleOnChangeNameFilter = (e) => {
    setNameFilter(e.target.value);
    setCurrentPage(1);
  };

  const handleOnChangeTypeFilter = (e) => {
    setTypeFilter(e.target.value);
    setCurrentPage(1);
  };

  /* Pagination */
  const totalPage = Math.ceil(filteredData.length / pokemonsPerPage);
  const indexOfLastItem = currentPage * pokemonsPerPage;
  const indexOfFirstItem = indexOfLastItem - pokemonsPerPage;
  const currentPokemons = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className="App">
      <h1>Pokedex</h1>
      <div className="input-area">
        <span>Filter by name: </span>
        <input type="text" placeholder="Filter by name" onChange={handleOnChangeNameFilter} />
        <span>Filter by type: </span>
        <input type="text" placeholder="Filter by type" onChange={handleOnChangeTypeFilter} />
      </div>
      <PaginationContainer
        currentPage={currentPage}
        indexOfLastItem={indexOfLastItem}
        totalNumber={filteredData.length}
        totalPages={totalPage}
        onClickPrevious={() => setCurrentPage(currentPage - 1)}
        onClickPageNumber={(e) => setCurrentPage(Number(e.target.id))}
        onClickNext={() => setCurrentPage(currentPage + 1)}
      >
        <PokemonCardContainer>
        {
          currentPokemons.map((pokemon, index) => (
            <PokemonCard 
              key={index}
              name={pokemon.name.english}
              picture={mapPokemonIdToImageFilename(pokemon.id)}
              types={pokemon.type}
            />
          ))
        }
        </PokemonCardContainer>
      </PaginationContainer>
    </div>
  );
}

export default App;

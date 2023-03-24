import React from 'react';
import { storiesOf } from '@storybook/react';
import PaginationContainer from './PaginationContainer';
import PokemonCard from './PokemonCard';

const pokemons = [
    {
        name: 'Bulbasaur',
        picture: '001.png',
        types: ['Grass', 'Poison']
    },
    {
        name: 'Ivysaur',
        picture: '002.png',
        types: ['Grass', 'Poison']
    },
    {
        name: 'Venusaur',
        picture: '003.png',
        types: ['Grass', 'Poison']
    },
    {
        name: 'Charmander',
        picture: '004.png',
        types: ['Fire']
    }
];

const currentPage = 1
const pokemonsPerPage = 1;
const totalPage = Math.ceil(pokemons.length / pokemonsPerPage);
const indexOfLastItem = currentPage * pokemonsPerPage;
const indexOfFirstItem = indexOfLastItem - pokemonsPerPage;
const currentPokemons = pokemons.slice(indexOfFirstItem, indexOfLastItem);

storiesOf('PaginationContainer', module).add('PaginationContainer', () => {
    return (
        <PaginationContainer
            currentPage={currentPage}
            indexOfLastItem={indexOfLastItem}
            totalNumber={pokemons.length}
            totalPages={totalPage}
            onClickPrevious={() => {}}
            onClickPageNumber={() => {}}
            onClickNext={() => {}}
        >
        {
            currentPokemons.map((pokemon) => <PokemonCard name={pokemon.name} picture={pokemon.picture} types={pokemon.types} />)
        }
        </PaginationContainer>
    );
});
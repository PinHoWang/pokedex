import React from 'react';
import { storiesOf } from '@storybook/react';
import PokemonCardContainer from './PokemonCardContainer';
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

storiesOf('PokemonCardContainer', module).add('PokemonCardContainer', () => {
    return (
        <PokemonCardContainer>
        {
            pokemons.map((pokemon) => <PokemonCard name={pokemon.name} picture={pokemon.picture} types={pokemon.types} />)
        }
        </PokemonCardContainer>
    );
});
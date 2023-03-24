import React from 'react';
import { storiesOf } from '@storybook/react';
import PokemonCard from './PokemonCard';

const name = 'Bulbasaur';
const picture = '001.png';
const types = ['Grass', 'Poison'];

storiesOf('PokemonCard', module).add('PokemonCard', () => <PokemonCard name={name} picture={picture} types={types}/>);
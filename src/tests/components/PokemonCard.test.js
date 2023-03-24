import { render, screen } from '@testing-library/react'
import PokemonCard from '../../components/PokemonCard';

describe('PokemonCard', () => {
    const name = 'Bulbasaur';
    const picture = '001.png';
    const types = ['Grass', 'Poison'];

    test('renders PokemonCard component with name, picture and types', () => {
        render(<PokemonCard name={name} picture={picture} types={types} />);

        // component should be rendered
        const pokemonCard = screen.getByTestId('pokemon-card');
        expect(pokemonCard).toBeInTheDocument();

        // name should be displayed
        const nameField = screen.getByText(name);
        expect(nameField).toBeInTheDocument();

        // image should be displayed
        const imageField = screen.getByAltText(picture);
        expect(imageField).toBeInTheDocument();

        // types shoudl be displayed
        const typesField = screen.getAllByTestId('badge');
        expect(typesField.length).toBe(types.length);
        typesField.forEach((typeField, index) => {
            expect(typeField).toHaveTextContent(types[index]);
        });
    });
});
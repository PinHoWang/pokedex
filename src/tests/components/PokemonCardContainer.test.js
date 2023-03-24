import React from 'react';
import { render } from '@testing-library/react';
import PokemonCardContainer from '../../components/PokemonCardContainer';

describe('PokemonCardContainer', () => {
    it('renders with children', () => {
        const { getAllByTestId } = render(
            <PokemonCardContainer>
                <div data-testid="child">This is a child element</div>
                <div data-testid="child">This is a child element</div>
                <div data-testid="child">This is a child element</div>
            </PokemonCardContainer>
        );
        expect(getAllByTestId('child').length).toBe(3);
    });

    it('renders with correct class', () => {
        const { container } = render(<PokemonCardContainer />);
        expect(container.firstChild).toHaveClass('grid-container');
    });
});
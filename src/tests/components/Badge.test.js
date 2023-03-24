import React from 'react';
import { render, screen } from '@testing-library/react';
import Badge from '../../components/Badge';

describe('Badge', () => {
    test('renders text prop', () => {
        const text = 'Grass';
        render(<Badge text={text} />);
        
        const badgeText = screen.getByText(text);
        expect(badgeText).toBeInTheDocument();
    });
});
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import PaginationContainer from '../../components/PaginationContainer';

describe('PaginationContainer', () => {
    it('renders with children', () => {
        const { getByTestId } = render(
            <PaginationContainer currentPage={1} indexOfLastItem={10} totalNumber={20} totalPages={2} onClickPrevious={() => { }} onPageNumberClick={() => { }} onClickNext={() => { }}>
                <div data-testid="child">This is a child element</div>
            </PaginationContainer>
        );
        expect(getByTestId('child')).toBeInTheDocument();
    });

    it('renders with correct page numbers', () => {
        const onPageNumberClick = jest.fn();
        const { getByText } = render(
            <PaginationContainer
                currentPage={1}
                indexOfLastItem={10}
                totalNumber={30}
                totalPages={10}
                onPageNumberClick={onPageNumberClick}
            />
        );
        expect(getByText('1')).toBeInTheDocument();
        expect(getByText('2')).toBeInTheDocument();
        expect(getByText('3')).toBeInTheDocument();
    });

    it('calls onClickNext when next button is clicked', () => {
        const onClickNext = jest.fn();
        const { getByText } = render(
            <PaginationContainer
                currentPage={1}
                indexOfLastItem={10}
                totalNumber={30}
                totalPages={10}
                onClickNext={onClickNext}
            />
        );
        fireEvent.click(getByText('>'));
        expect(onClickNext).toHaveBeenCalled();
    });

    it('calls onClickPrevious when previous button is clicked', () => {
        const onClickPrevious = jest.fn();
        const { getByText } = render(
            <PaginationContainer
                currentPage={2}
                indexOfLastItem={20}
                totalNumber={30}
                totalPages={10}
                onClickPrevious={onClickPrevious}
            />
        );
        fireEvent.click(getByText('<'));
        expect(onClickPrevious).toHaveBeenCalled();
    });
});
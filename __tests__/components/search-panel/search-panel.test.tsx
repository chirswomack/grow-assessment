import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import { SearchPanel } from '@/app/components/search-panel/search-panel';

describe('SearchPanel', () => {
    it('renders children', () => {
        render(<SearchPanel setArticles={() => {}}/>);

        const datePicker = screen.getByTestId('date-picker');
        const resultCountPicker = screen.getByTestId('result-count-picker');
        const divider = screen.getByTestId('divider');
        const searchButton = screen.getByRole('button');

        expect(datePicker).toBeInTheDocument();
        expect(resultCountPicker).toBeInTheDocument();
        expect(divider).toBeInTheDocument();
        expect(searchButton).toBeInTheDocument();
    });
});
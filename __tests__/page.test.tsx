import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import Home  from '../src/app/page';

describe('Home', () => {
    beforeEach(() => {
        render(<Home />)
    });

    it('renders title text', () => {
        const title = screen.getByText('Top Wikipedia articles');
        expect(title).toBeInTheDocument();
    });

    it('renders header', () => {
        const header = screen.getByTestId('sticky-header');
        expect(header).toBeInTheDocument();
    })
});
import { fireEvent, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import { CalendarComponent, CalendarComponentProps } from '@/app/components/search-panel/calendar-component';

describe('CalendarComponent', () => {
    let props: CalendarComponentProps;

    beforeEach(() => {
        props = {
            date: new Date('March 1, 2023'),
            setDateAndClose: () => {}
        }

        render(<CalendarComponent {...props} />)
    });

    it('renders children', () => {
        const previousMonth = screen.getByTestId('prev-month');
        const nextMonth = screen.getByTestId('next-month');
        const month = screen.getByText('March 2023');
        const exampleDay = screen.getByTestId('March 28');

        expect(previousMonth).toBeInTheDocument();
        expect(nextMonth).toBeInTheDocument();
        expect(month).toBeInTheDocument();
        expect(exampleDay).toBeInTheDocument();
    });

    it('decrements month', async () => {
        const previousMonth = screen.getByTestId('prev-month');
        let month = screen.queryByText('March 2023');
        expect(month).toBeInTheDocument();

        fireEvent.click(previousMonth);
        month = await screen.queryByText('March 2023');
        expect(month).not.toBeInTheDocument();
        const newMonth = await screen.getByText('February 2023');
        expect(newMonth).toBeInTheDocument();
    });

    it('increments month', async () => {
        const nextMonth = screen.getByTestId('next-month');
        let month = screen.queryByText('March 2023');
        expect(month).toBeInTheDocument();

        fireEvent.click(nextMonth);
        month = await screen.queryByText('March 2023');
        expect(month).not.toBeInTheDocument();
        const newMonth = await screen.getByText('April 2023');
        expect(newMonth).toBeInTheDocument();
    });
});
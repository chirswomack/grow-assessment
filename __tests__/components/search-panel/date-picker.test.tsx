import { fireEvent, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import dayjs from 'dayjs';

import { DatePicker, DatePickerProps } from '@/app/components/search-panel/date-picker';

describe('DatePicker', () => {
    let props: DatePickerProps;

    beforeEach(() => {
        props = {
            date: dayjs().subtract(1, 'day').toDate(),
            setDate: () => {}
        };

        render(<DatePicker {...props} />)
    });

    it('renders children, calendar closed by default', () => {
        const calendarIcon = screen.getByAltText('calendar icon');
        const dateSpan = screen.getByText('Date');
        const dateString = screen.getByText(dayjs(props.date).format('MMMM D, YYYY'));
        const calendar = screen.queryByTestId('calendar');

        expect(calendarIcon).toBeInTheDocument();
        expect(dateSpan).toBeInTheDocument();
        expect(dateString).toBeInTheDocument();
        expect(calendar).toBeNull();
    });

    it('toggles calendar', async () => {
        const calendarIcon = screen.getByAltText('calendar icon');
        let calendar = screen.queryByTestId('calendar');
        expect(calendar).toBeNull();

        fireEvent.click(calendarIcon);
        calendar = await screen.queryByTestId('calendar');

        expect(calendar).not.toBeNull();
    });
});
import { fireEvent, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import dayjs from 'dayjs';

import { ResultCountPicker, ResultCountPickerProps } from '@/app/components/search-panel/result-count-picker';

describe('ResultCountPicker', () => {
    let props: ResultCountPickerProps;

    beforeEach(() => {
        props = {
            resultCount: 100,
            setResultCount: () => {}
        };

        render(<ResultCountPicker {...props} />)
    });

    it('renders children, select list closed by default', () => {
        const listIcon = screen.getByAltText('list icon');
        const numResults = screen.getByText('Num Results');
        const dateString = screen.getByText(props.resultCount);
        const selectList = screen.queryByTestId('result-count-select-list');

        expect(listIcon).toBeInTheDocument();
        expect(numResults).toBeInTheDocument();
        expect(dateString).toBeInTheDocument();
        expect(selectList).toBeNull();
    });

    it('toggles select list', async () => {
        const listIcon = screen.getByAltText('list icon');
        let selectList = screen.queryByTestId('result-count-select-list');
        expect(selectList).toBeNull();

        fireEvent.click(listIcon);
        selectList = await screen.queryByTestId('result-count-select-list');

        expect(selectList).not.toBeNull();
    });
});
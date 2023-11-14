'use client'

import { useCallback, useState } from 'react';

import { ResultCountPicker } from './result-count-picker';
import { DatePicker } from './date-picker';
import { Article } from '../../utils';
import { wikimediaTopArticlesForDate } from '@/app/api';

export interface SearchPanelProps {
    setArticles: (articles: Article[]) => void;
}

export const SearchPanel = ({ setArticles }: SearchPanelProps) => {
    const [resultCount, setResultCount] = useState(100);
    const [date, setDate] = useState(() => {
        const initialDate = new Date();
        initialDate.setDate(initialDate.getDate() - 1);

        return initialDate;
    });

    const fetchArticles = useCallback(async () => {
        try {
            const newArticles = await wikimediaTopArticlesForDate(date, resultCount);
            setArticles(newArticles);
        } catch (e: any) {
            alert(e.message);
        }
    }, [resultCount, date])

    return (
        <div className="flex items-center flex-col bg-neutral-000 p-6 shadow-card sm:rounded-2xl lg:rounded-full lg:p-4 lg:w-[800px] lg:h-[96px] lg:flex-row">
            <DatePicker date={date} setDate={setDate} />
            <div className="divider hidden h-full w-[40px] ml-4 lg:flex items-center justify-center" data-testid="divider">
                <span className="h-full w-px block bg-neutral-300"></span>
            </div>
            <ResultCountPicker resultCount={resultCount} setResultCount={setResultCount} />
            <button className="rounded-full w-full py-3 px-6 bg-green font-medium flex-none mt-6 lg:mt-0 lg:w-[160px] lg:h-full lg:ml-4 hover:bg-green-300" type="submit"
                onClick={fetchArticles}>
                Search
            </button>
        </div>
    );
}
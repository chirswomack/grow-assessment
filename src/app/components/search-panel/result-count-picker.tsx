'use client'

import { useCallback, useState } from 'react';
import Image from 'next/image';

import { VALID_RESULT_COUNTS } from '../../utils';
import ChevronDown from 'public/chevron-down.svg';

export interface ResultCountPickerProps {
    resultCount: number;
    setResultCount: (resultCount: number) => void;
}

export const ResultCountPicker = ({
    resultCount,
    setResultCount
}: ResultCountPickerProps) => {
    const [listVisible, setListVisible] = useState(false);
    const toggleListVisible = () => setListVisible(!listVisible);
    const setResultCountAndToggleList = useCallback((newValue: number) => {
        if (!VALID_RESULT_COUNTS.includes(newValue)) {
            return;
        }

        setResultCount(newValue);
        toggleListVisible();
    }, [setResultCount, toggleListVisible]);

    return (
        <div className="w-full result-count-picker" data-testid="result-count-picker">
            <div className={`rounded-full p-3 flex items-center flex-auto cursor-pointer mt-6 lg:mt-0 lg:ml-4 ${listVisible ? 'bg-neutral-100' : 'hover:bg-neutral-100-hover'}`}
                onClick={toggleListVisible}>
                <Image
                    src="/list.svg"
                    alt="list icon"
                    width={48}
                    height={48}
                    />
                <div className="flex flex-col ml-6">
                    <div className="flex">
                        <span className="mr-[6px] uppercase text-neutral-500 text-sm">Num Results</span>
                        <ChevronDown className="self-center" transform={`rotate(${listVisible ? 180 : 0})`} />
                    </div>
                    <span className="text-black text-base">{resultCount}</span>
                </div>
            </div>
            {listVisible &&
                <div data-testid="result-count-select-list">
                    <ul className="list-none absolute shadow-popover bg-neutral-000 text-text-primary w-[200px] py-5 rounded-2xl mt-[10px] lg:ml-4">
                        {VALID_RESULT_COUNTS.map((count: number) => 
                            <li key={`${count}-select-item`} onClick={() => setResultCountAndToggleList(count)} className="text-center w-full hover:bg-neutral-100 cursor-pointer px-4 py-3">{count}</li>
                        )}
                    </ul>
                </div>}
        </div>
    );
}
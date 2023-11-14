'use client'
import { useCallback, useState } from 'react';
import dayjs from 'dayjs';
import isBetween from 'dayjs/plugin/isBetween';
dayjs.extend(isBetween);

import ChevronLeft from 'public/chevron-left.svg';

export interface CalendarComponentProps {
    date: Date;
    setDateAndClose: (date: Date) => void;
}

export const CalendarComponent = ({
    date,
    setDateAndClose
}: CalendarComponentProps) => {
    const [firstOfMonth, setCurrentMonth] = useState(() => dayjs(date).date(1));
    const firstSunday = firstOfMonth.startOf('week');
    const lastOfMonth = firstOfMonth.endOf('month');
    const yesterday = dayjs().subtract(1, 'day');

    const incrementMonth = () => {
        const nextMonth = firstOfMonth.add(1, 'month');
        setCurrentMonth(nextMonth);
    };
    const decrementMonth = () => {
        const previousMonth = firstOfMonth.subtract(1, 'month');
        setCurrentMonth(previousMonth);
    };
    const attemptSetDateAndClose = useCallback((date: dayjs.Dayjs) => {
        if (date.isAfter(dayjs().subtract(1, 'day'))) {
            return;
        }

        setDateAndClose(date.toDate());
    }, [setDateAndClose]);

    return (
        <div className="z-100 absolute shadow-popover bg-neutral-000 mt-[10px] w-[375px] h-[382px] rounded-2xl px-4 py-8" data-testid="calendar">
            <div className="header text-text-primary font-medium flex justify-center w-full">
                <div onClick={decrementMonth} className="self-center cursor-pointer" data-testid="prev-month"><ChevronLeft fill="#05090D"/></div>
                <span className="flex-auto text-center">{firstOfMonth.format('MMMM YYYY')}</span>
                <div onClick={incrementMonth} className="self-center cursor-pointer" data-testid="next-month"><ChevronLeft transform="rotate(180)" fill="#05090D" /></div>
            </div>
            <div className="weeks text-neutral-500 uppercase mt-8 grid grid-cols-7 grid-rows-[42px_44px_44px_44px_44px_44px]">
                {weekdays.map((day: string) => <span key={`${day}-header`} className="py-2 flex flex-col justify-center text-center text-xs">{day}</span>)}
                {[...Array(35)].map((_, daysSinceStart: number) => {
                    const currentDay = firstSunday.add(daysSinceStart, 'day');

                    let additionalClasses = '';
                    if (currentDay.isSame(dayjs(date), 'day')) {
                        additionalClasses = 'text-green bg-ivy font-medium';
                    } else if (currentDay.isBetween(firstOfMonth, lastOfMonth, 'day', '[]')) {
                        additionalClasses = 'text-neutral-900 hover:bg-avocado-200';
                    }
                    if (currentDay.isAfter(yesterday, 'day')) {
                        additionalClasses = '!text-neutral-400 !cursor-default';
                    }
                    return <div className="flex flex-col justify-center py-[3px] px-[6px]" key={currentDay.format('MM-DD-YYYY-button')} onClick={() => attemptSetDateAndClose(currentDay)}>
                        <span className={`py-2 text-center rounded-full text-sm cursor-pointer ${additionalClasses}`} data-testid={currentDay.format('MMMM D')}>
                            {currentDay.format('D')}
                        </span>
                    </div>
                })}
            </div>
        </div>
    );
}

const weekdays = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
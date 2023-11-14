'use client'

import Image from 'next/image';
import { useCallback, useState } from 'react';

import ChevronDown from 'public/chevron-down.svg';
import { CalendarComponent } from './calendar-component';

export interface DatePickerProps {
    date: Date;
    setDate: (date: Date) => void;
}

export const DatePicker = ({
    date,
    setDate
}: DatePickerProps) => {
    const [calendarVisible, setCalendarVisible] = useState(false);
    const toggleCalendarVisible = () => setCalendarVisible(!calendarVisible);
    const setDateAndToggleCalendar = useCallback((newValue: Date) => {
        setDate(newValue);
        toggleCalendarVisible();
    }, [setDate, calendarVisible]);

    return (
        <div className="w-full z-10" data-testid="date-picker">
            <div className={`date-picker rounded-full p-3 flex cursor-pointer items-start w-full flex-grow lg:items-center hover:bg-neutral-100 lg:flex-auto ${calendarVisible ? 'bg-neutral-100' : 'hover:bg-neutral-100-hover'}`}
                onClick={toggleCalendarVisible}>
                <Image
                    src="/calendar.svg"
                    alt="calendar icon"
                    height={48}
                    width={48}
                    />
                <div className="flex flex-col ml-6">
                    <div className="flex">
                        <span className="mr-[6px] uppercase text-neutral-500 text-sm">Date</span>
                        <ChevronDown className="self-center" transform={`rotate(${calendarVisible ? 180 : 0})`} />
                    </div>
                    <span className="text-black text-base">{date.toLocaleDateString('en-us', { year: "numeric", month: "long", day: "numeric"})}</span>
                </div>
            </div>
            {calendarVisible && <CalendarComponent date={date} setDateAndClose={setDateAndToggleCalendar} />}
        </div>
    );
}
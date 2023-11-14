'use client'

import Image from 'next/image'

export const SearchPanel = () => (
    <div className="w-[800px] h-[96px] flex items-center justify-between bg-neutral-000 rounded-full p-4">
        <Image
            src="/calendar.svg"
            alt="calendar icon"
            height={48}
            width={48}
            />
        <span className="h-full w-0.5 block bg-neutral-300"></span>
        <Image
            src="/list.svg"
            alt="list icon"
            width={48}
            height={48}
            />
        <button className="rounded-full py-6 px-3 bg-green w-[160px] font-medium" type="submit">Search</button>
    </div>
);
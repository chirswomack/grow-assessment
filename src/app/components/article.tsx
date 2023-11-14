'use client'

import { lora } from '../fonts'
import { Article } from '../utils';
import PinOpen from 'public/pin-open.svg'
import PinFilled from 'public/pin-filled.svg'

export interface ArticleComponentProps {
    article: Article;
    isPinned: boolean;
    togglePinned: (article: Article) => void;
}

export const ArticleComponent = ({
    article,
    isPinned,
    togglePinned
}: ArticleComponentProps) => {
    const { rank, views, article: title } = article;

    return (
        <div className="flex items-center self-stretch p-6 border border-neutral-300 rounded-xl text-base mt-5 first:mt-0">
            {!isPinned && <span className={`${lora.className} text-neutral-500`}>{rank}</span>}
            <span className={`${lora.className} text-black font-medium flex-grow mx-5 truncate`}>{title}</span>
            <span className="text-neutral-500 text-sm2">{views.toLocaleString()} views</span>
            <span className="ml-5 cursor-pointer" onClick={() => togglePinned(article)}>
                {isPinned ? <PinFilled /> : <PinOpen />}
            </span>
        </div>
    );
}
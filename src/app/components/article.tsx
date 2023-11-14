import { lora, poppins } from '../layout'

export interface ArticleProps {
    rank: number;
    title: string;
    views: number;
}

export const Article = ({
    rank,
    title,
    views
}: ArticleProps) => (
    <div className="flex items-center self-stretch p-6 border border-neutral-300 rounded-xl text-base">
        <span className={`${lora.className} text-neutral-500`}>{rank}</span>
        <span className={`${lora.className} text-black font-medium flex-grow mx-5`}>{title}</span>
        <span className="text-neutral-500 text-sm">{views} views</span>
    </div>
);
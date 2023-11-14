'use client'

import { useCallback, useMemo } from 'react';

import ChevronLeft from 'public/chevron-left.svg';

export interface ArticlePaginationProps {
    pageCount: number;
    currentPage: number;
    setCurrentPage: (page: number) => void;
}

export const ArticlePagination = ({
    pageCount,
    currentPage,
    setCurrentPage
}: ArticlePaginationProps ) => {
    const pagesArray = useMemo(() => {
       return [...Array(pageCount)];
    }, [pageCount]);

    const isFirstPage = useMemo(() => currentPage == 1, [currentPage]);
    const isLastPage = useMemo(() => currentPage == pageCount, [currentPage, pageCount]);

    const getPageButtonClasses = useCallback((pageNumber: number): string => {
        const isActive = pageNumber == currentPage;
        const additionalClasses = isActive ? activePageButtonClasses : inactivePageButtonClasses;
        return `${basePageButtonClasses} ${additionalClasses}`;
    }, [currentPage]);

    return (
        <div className="mt-10 flex justify-center" data-testid="article-pagination">
            <div className={`prev-arrow ${basePageButtonClasses} ${isFirstPage ? 'bg-neutral-400' : inactivePageButtonClasses} !mr-6`}
                onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                data-testid="previous-page">
                <ChevronLeft fill={isFirstPage ? '#737680' : '#025B4B'} />
            </div>
            <div className="page-selectors flex">
                {pagesArray.map((_, index) => {
                    return (
                        <div key={`page-selector-${index}`} className={`${getPageButtonClasses(index + 1)} hidden md:flex`} onClick={() => setCurrentPage(index + 1)}>
                            {index + 1}
                        </div>);
                })}
            </div>
            <div className={`next-arrow ${basePageButtonClasses} ${isLastPage ? 'bg-neutral-400' : inactivePageButtonClasses} !ml-6`}
                onClick={() => setCurrentPage(Math.min(currentPage + 1, pageCount))}
                data-testid="next-page">
                <ChevronLeft transform="rotate(180)" fill={isLastPage ? '#737680' : '#025B4B'} />
            </div>
        </div>
    );
}

const basePageButtonClasses = 'cursor-pointer text-center flex flex-col justify-center items-center rounded-full ml-2 first:ml-0 w-[40px] h-[40px]';
const inactivePageButtonClasses = 'text-neutral-900 border border-neutral-400 bg-neutral-000 hover:text-green hover:bg-avocado-200 hover:border-none';
const activePageButtonClasses = 'font-medium bg-avocado-300 text-green';
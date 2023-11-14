'use client'

import { useCallback, useMemo, useState } from 'react';
import { Article } from "../utils";
import { ArticleComponent } from "./article";
import { ArticlePagination } from "./article-pagination";

export interface ArticleListProps {
    articles: Article[];
}

export const PINNED_ARTICLES_STORAGE_KEY = 'pinned-articles-list';

export const ArticleList = ({
    articles
}: ArticleListProps) => {
    const [pinnedArticles, setPinnedArticles] = useState<Article[]>(() => {
        const storedString = window.localStorage.getItem(PINNED_ARTICLES_STORAGE_KEY);
        return storedString === null ? [] : JSON.parse(storedString);
    });
    const nonPinnedArticles = useMemo(() => {
        return articles.filter(article => !pinnedArticles.includes(article));
    }, [pinnedArticles, articles]);

    const [currentPage, setCurrentPage] = useState(1);
    const resultsPerPage = articles.length > 100 ? 20 : 10;
    const pageCount = Math.ceil(nonPinnedArticles.length / resultsPerPage);
    const indexOfLastArticle = currentPage * resultsPerPage;
    const indexOfFirstArticle = indexOfLastArticle - resultsPerPage;
    const currentResults = nonPinnedArticles.slice(indexOfFirstArticle, indexOfLastArticle);

    const togglePinned = useCallback((article: Article) => {
        if (pinnedArticles.includes(article)) {
            updatePinnedArticlesAndStore(pinnedArticles.filter(a => a !== article));
        } else {
            updatePinnedArticlesAndStore(pinnedArticles.concat([article]));
        }
    }, [pinnedArticles, setPinnedArticles]);

    const updatePinnedArticlesAndStore = useCallback((pinnedArticles: Article[]) => {
        setPinnedArticles(pinnedArticles);
        window.localStorage.setItem(PINNED_ARTICLES_STORAGE_KEY, JSON.stringify(pinnedArticles));
    }, [setPinnedArticles]);
    
    return (
        <>
            {pinnedArticles.length > 0 && 
                <div data-testid="pinned-article-list" className="article-list bg-neutral-000 mt-6 flex flex-col p-8 shadow-card sm:rounded-2xl">
                    {pinnedArticles.map((article: Article, index: number) => 
                        <ArticleComponent article={article} isPinned={true} key={`${article.rank}${article.article}${index}`} togglePinned={togglePinned} />)}
                </div>}
            {currentResults.length > 0 && 
                <div data-testid="article-list" className="article-list bg-neutral-000 mt-6 flex flex-col p-8 shadow-card sm:rounded-2xl">
                    {currentResults.map((article: Article, index: number) => 
                        <ArticleComponent article={article} isPinned={false} key={`${article.rank}${article.article}${index}`} togglePinned={togglePinned} />)}
                </div>}
            {pageCount > 1 && <ArticlePagination pageCount={pageCount} currentPage={currentPage} setCurrentPage={setCurrentPage} />}
        </>
    );
}
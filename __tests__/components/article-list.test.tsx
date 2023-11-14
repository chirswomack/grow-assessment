import { fireEvent, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import { ArticleList, PINNED_ARTICLES_STORAGE_KEY } from '@/app/components/article-list';

describe('ArticleList', () => {
    afterAll(() => {
        localStorage.removeItem(PINNED_ARTICLES_STORAGE_KEY);
    });

    const getSampleArticles = () => {
        const firstPage = Array(10).fill({ rank: 1, article: 'Last Of Us (TV show)', views: 123456789 });
        const secondPage = Array(10).fill({ rank: 2, article: 'Last Of Us (video game)', views: 123456789 });
        return firstPage.concat(secondPage);
    }

    it('renders nothing for empty list', () => {
        render(<ArticleList articles={[]}/>);

        const list = screen.queryByTestId('article-list');
        const pagination = screen.queryByTestId('article-pagination');

        expect(list).toBeNull();
        expect(pagination).toBeNull();
    });

    it('renders only unpinned list when no pins', () => {
        render(<ArticleList articles={getSampleArticles()} />);

        const list = screen.getByTestId('article-list');
        const pagination = screen.getByTestId('article-pagination');
        const pinnedList = screen.queryByTestId('pinned-article-list');

        expect(list).toBeInTheDocument();
        expect(pagination).toBeInTheDocument();
        expect(pinnedList).toBeNull();
    });

    it('switches pages', async () => {
        render(<ArticleList articles={getSampleArticles()} />);

        let firstPageArticle = screen.queryAllByText('Last Of Us (TV show)');
        let secondPageArticle = screen.queryAllByText('Last Of Us (video game)');
        expect(firstPageArticle).toHaveLength(10);
        expect(secondPageArticle).toHaveLength(0);

        const nextPageButton = screen.getByTestId('next-page');
        fireEvent.click(nextPageButton);

        firstPageArticle = await screen.queryAllByText('Last Of Us (TV show)');
        secondPageArticle = await screen.queryAllByText('Last Of Us (video game)');
        expect(firstPageArticle).toHaveLength(0);
        expect(secondPageArticle).toHaveLength(10);
    });

    it('renders pinned list when items present', () => {
        localStorage.setItem(PINNED_ARTICLES_STORAGE_KEY, JSON.stringify([getSampleArticles()[0]]));
        render(<ArticleList articles={getSampleArticles()} />);

        const pinnedList = screen.getByTestId('pinned-article-list');
        expect(pinnedList).toBeInTheDocument();

        localStorage.removeItem(PINNED_ARTICLES_STORAGE_KEY);
    });
});
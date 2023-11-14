import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import { ArticleComponent, ArticleComponentProps } from '@/app/components/article';
import { Article } from '@/app/utils';

describe('ArticleComponent', () => {
    let props: ArticleComponentProps;

    beforeEach(() => {
        props = {
            article: {
                rank: 1,
                article: 'Last Of Us (TV show)',
                views: 123456789
            },
            isPinned: false,
            togglePinned: () => {}
        }
    });    

    it('renders article info', () => {
        render(<ArticleComponent {...props} />);
        const viewsString = '123,456,789 views';
        const rank = screen.getByText(props.article.rank);
        const title = screen.getByText(props.article.article);
        const views = screen.getByText(viewsString);

        expect(rank).toBeInTheDocument();
        expect(title).toBeInTheDocument();
        expect(views).toBeInTheDocument();
    });

    it('hides rank on pinned article', () => {
        props.isPinned = true;
        render(<ArticleComponent {...props} />);

        const rank = screen.queryByText(props.article.rank);
        expect(rank).toBeNull();
    });
});
import { wikimediaTopArticlesForDate } from "@/app/api";
import { ApiResponse } from "@/app/utils";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(sampleResponse),
  })
) as jest.Mock;

jest.mock('../src/app/api', () => {
    const originalModule = jest.requireActual('../src/app/api');

    return {
        __esModule: true,
        ...originalModule
    };
});

const sampleResponse: ApiResponse = {
    items: [{
        articles: [{ rank: 1, article: 'title', views: 500 }, { rank: 2, article: 'title2', views: 501 }],
        project: '',
        access: '',
        year: '',
        month: '',
        day: '',
    }]
}

describe('wikimediaTopArticlesForDate', () => {
    it('returns results, up to limit', async () => {
        const date = new Date('January 1, 2023');
        const result = await wikimediaTopArticlesForDate(date, 1);
        
        expect(result).toHaveLength(1);
        expect(result[0].rank).toEqual(1);
        expect(result[0].article).toEqual('title');
        expect(result[0].views).toEqual(500);
    });

    it('throws for invalid date', async () => {
        const date = new Date('January 1, 2025');
        expect(async () => {
            await wikimediaTopArticlesForDate(date, 2);
        }).rejects.toThrow();
    });
});
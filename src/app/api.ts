import dayjs from 'dayjs';

import { API_BASE_URL, ApiResponse, Article } from './utils';

/**
 * Query the Wikimedia API for the top ranked articles for the given date
 * @param date the date query for
 * @param resultCount the desired amount of results to show
 * @returns the list of article results, limited to @resultCount
 * @throws Invalid date error if @date is today or in the future
 */
export const wikimediaTopArticlesForDate = async (date: Date, resultCount: number): Promise<Article[]> => {
    const dateDayJs = dayjs(date);
    if (dateDayJs.isAfter(dayjs().subtract(1, 'day'), 'day')) {
        throw new Error('Invalid date');
    }

    const url = API_BASE_URL + dateDayJs.format('YYYY/MM/DD');
    try {
        const response = await fetch(url);
        const reponseItems: ApiResponse = await response.json();

        return reponseItems.items[0].articles.slice(0, resultCount);
    } catch (e) {
        throw e;
    }
}
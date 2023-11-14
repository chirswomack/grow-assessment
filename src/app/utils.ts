export interface Article {
    rank: number;
    article: string;
    views: number;
}

export const API_BASE_URL = 'https://wikimedia.org/api/rest_v1/metrics/pageviews/top/en.wikipedia/all-access/';
export interface ApiResponse {
    items: ApiResponseItem[]
}
interface ApiResponseItem {
    articles: Article[];
    project: string;
    access: string;
    year: string;
    month: string;
    day: string;
}

export const VALID_RESULT_COUNTS = [25, 50, 75, 100, 200];
import { apiClient, apiQuotes, apiWeather } from "./client";

const getNewsData = () => apiClient.get('/results');
// const getNewsData = () => apiClient.get('/news');

const getQuotesData = () => apiQuotes.get('/inspiration');

const getWeatherData = () => apiWeather.get()

export default {
    getQuotesData,
    getNewsData,
    getWeatherData
}

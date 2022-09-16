import { apiClient, apiQuotes, apiWeather } from "./client";

const getNewsData = () => apiClient.get('/results');
const getNewsData1 = () => apiClient.get('/results1');
// const getNewsData = () => apiClient.get('/news');

const getQuotesData = () => apiQuotes.get('/inspiration');

const getWeatherData = () => apiWeather.get()

export default {
    getQuotesData,
    getNewsData,
    getWeatherData,
    getNewsData1
}

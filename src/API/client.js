import axios from "axios";

const apiClient = axios.create({

    baseURL: "http://localhost:8080",
    // baseURL: "https://newsdata.io/api/1",
    // params: {
    //     'apikey': 'pub_108097da9b3a076ae12de4a38acb24e566fba'
    // }

})

const apiQuotes = axios.create({

    baseURL: 'https://api.goprogram.ai'

});

const apiWeather = axios.create({

    baseURL: 'https://api.weatherapi.com/v1/current.json',
    params: {
        'key': '3de0f546cc464a8494935814220209',
        'q': 'india'
    }

})

export {
    apiClient,
    apiQuotes,
    apiWeather
};
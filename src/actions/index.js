import axios from 'axios';

const API_KEY = '6785396981a310e4d3c59e45d3ff4f9a';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEAVER = 'FETCH_WEAVER';

export function fetchWeather(city) {

    const url = `${ROOT_URL}&q=${city},fr`;
    const request = axios.get(url);

    return {
        type: FETCH_WEAVER,
        payload: request
    };
}
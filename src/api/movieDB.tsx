import axios from 'axios';

const API_KEY = 'PLACE_HERE_THEMOVIEDB_API_KEY';

const movieDB = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie',
  params: {
    api_key: API_KEY,
    language: 'en-US',
  },
});

export default movieDB;

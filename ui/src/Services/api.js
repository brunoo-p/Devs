import axios from 'axios';
import { setupCache } from 'axios-cache-adapter'

const cache = setupCache({
    maxAge: 31536000
  });

const api = axios.create({
    baseURL: 'http://localhost:5000/',
    //baseURL: 'https://localhost:5001/', // URL development
    headers: {'Access-Control-Allow-Origin': '*'},
    adapter: cache.adapter
})

export default api;
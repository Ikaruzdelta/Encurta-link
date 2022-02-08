import axios from 'axios';

export const key = "1ef933c0845fac983eeb15eeff1c4af498f43234";

const api = axios.create({
    baseURL: 'https://api-ssl.bitly.com/v4/',
    headers:{
        'Authorization': `Bearer ${key}`
    }
})

export default api;
import axios from 'axios';


const instance = axios.create({
  baseURL: 'http://192.168.42.8:3001/'
});

export default instance;
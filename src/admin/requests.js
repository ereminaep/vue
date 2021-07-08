import axios from 'axios';

const baseUrl = 'https://webdev-api.loftschool.com';
const token = localStorage.getItem('token') || "";

axios.defaults.baseURL = baseUrl;
axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

export default axios;
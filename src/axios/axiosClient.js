import axios from "axios";

const axiosClient = axios.create({
    baseURL: 'https://avocatlawoffice.com/stockmanagementbackend/public/api',
    headers: {
        'Content-Type': 'application/json'
    }
});

axiosClient.interceptors.request.use((config) => {
    const token = localStorage.getItem('accessToken');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export default axiosClient;
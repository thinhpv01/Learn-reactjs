import axios from 'axios';

const axiosClient = axios.create({
    baseURL: 'https://api.ezfrontend.com/',
    headers: {
        'Content-type': 'application/json',
    },
});

// Add a request interceptor
axiosClient.interceptors.request.use(
    function (config) {
        // Do something before request is sent
        return config;
    },
    function (error) {
        // Do something with request error
        return Promise.reject(error);
    }
);

// Add a response interceptor
axiosClient.interceptors.response.use(
    function (response) {
        // Any status code that lie within the range of 2xx cause this function to trigger
        // Do something with response data
        return response.data;
    },
    function (error) {
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        // Do something with response error
        const { status, config, data } = error.response;
        const urls = ['/auth/local/register', '/auth/local'];
        if (status === 4000 || urls.includes(config.url)) {
            const errorList = data.message;
            const errorMessageList = errorList[0].messages;
            const errorMessage = errorMessageList[0].message;
            throw new Error(errorMessage);
        }
        return Promise.reject(error);
    }
);

export default axiosClient;

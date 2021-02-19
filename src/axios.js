import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://milo-thiesen-tinder-backend.herokuapp.com',
});

export default instance;

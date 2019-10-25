import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers:{
        Authorization: 'Client-ID 9b338f999531fa6f0478bbdb02c0b61872994b431d75d9b334f2a262262afc9f'
    }
})
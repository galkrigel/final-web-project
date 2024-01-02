import axios from 'axios';
import { Property as PropertyType } from '../models/Property';

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url: string) => {
    const options = {
        method: 'GET',
        url: `${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6`,
        params: {
            query: 'abu dhabi',
            hitsPerPage: '25',
            page: '0',
            lang: 'en'
        },
        headers: {
            'X-RapidAPI-Key': '4570107fdamsh7793587a36b75b5p189dcajsnf2ab4e91dde5',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
        }
    };
    try {
        const response = await axios.request(options);
        return response;
    } catch (error) {
        console.error(error);
    }

}
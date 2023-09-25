import axios from 'axios';
const BASE_URL='https://youtube-v31.p.rapidapi.com';

const options = {
    params: {
        maxResults: '50'
    },
    headers: {
      'X-RapidAPI-Key': '7c22eb84ddmshcc793c0c029e0b3p11f095jsn8ef7d52b5e20',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };

export const fetchFromAPI=async(url)=>{
    const {data}=await axios.get(`${BASE_URL}/${url}`,options);
    return data;
}
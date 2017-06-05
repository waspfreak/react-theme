import axios from 'axios';

export const FETCH_IMG = 'fetch_img';

//const ROOT_IMG = 'https://jsonplaceholder.typicode.com';
const ROOT_IMG = 'http://localhost:3000'

export function fetchImgs(){
  //const request = axios.get(`${ROOT_URL}${API_USER}${API_KEY}`);
  const request = axios.get(`${ROOT_IMG}/photos`);

  return{
    type: FETCH_IMG,
    payload: request
  }
}

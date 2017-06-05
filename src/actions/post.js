import axios from 'axios';

export const FETCH_POSTS = 'fetch_posts';


const ROOT_IMG = 'https://jsonplaceholder.typicode.com/posts';
//const ROOT_URL = 'http://reduxblog.herokuapp.com/api/';
//const API_USER = '?client_id=juleon80@gmail.com';
//const API_KEY = '&client_key=deb207b3-fb15';
//const API_KEY = '?key=waspfreak2';

//https://staging.eagle-core.com/api/v1/investigations?client_id=juleon80@gmail.com&client_key=deb207b3-fb15
//request for post
//[fetchPosts] function we call inside the component
export function fetchPosts(){
  //const request = axios.get(`${ROOT_URL}${API_USER}${API_KEY}`);
  const request = axios.get(`${ROOT_IMG}`);

  return{
    type: FETCH_POSTS,
    payload: request
  }
}

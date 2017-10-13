import axios from 'axios';

const API_KEY = '?key=0981237645';
const ROOT_URL = 'http://reduxblog.herokuapp.com/api';

export const FETCH_POSTS = 'fetch_posts';

export function fetchPosts() {
  const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);

  return {
    type: FETCH_POSTS,
    payload: request
  };
}

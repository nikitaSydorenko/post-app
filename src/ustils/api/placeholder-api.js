import { request } from "./request";

const BASE_URL = 'https://jsonplaceholder.typicode.com';

export const fetchPosts = () => request(`${BASE_URL}/posts`);
export const fetchUsers = () => request(`${BASE_URL}/users`)
export const fetchComments = (id) => request(`${BASE_URL}/posts/${id}/comments`)

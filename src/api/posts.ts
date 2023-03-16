import axios from "axios";

export async function getPosts() {
  const response = await axios.get(
    `https://jsonplaceholder.typicode.com/posts`
  );
  return response.data;
}

export async function getPost(userId: number) {
  const response = await axios.get(
    `https://jsonplaceholder.typicode.com/posts/${userId}`
  );
  return response.data;
}

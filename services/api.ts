import axios from "axios";

export const getPosts = async () => {
  const {data} = await axios.get(`https://62a6df6097b6156bff813771.mockapi.io/fakeData`);
  return data;
};

export const getPostById = async (id: any) => {
  const { data } = await axios.get(`https://62a6df6097b6156bff813771.mockapi.io/fakeData?id=${id}`);
  console.log(`Get post by id= ${id}`);
  return data;
};

// @ts-ignore
export const createPost = ({ title, body }) => {
  const response = axios.post(`https://62a6df6097b6156bff813771.mockapi.io/fakeData`, {
    title,
    body,
  })
  console.log('Create post');
  return response;
};

// @ts-ignore
export const updatePost = async ({ id, title, body }) => {
  const [...rest] = [title, body];
  const { data } = await axios.put(`https://62a6df6097b6156bff813771.mockapi.io/fakeData?id=${id}`, rest);
  console.log(`Update post id= ${id}`);
  return data;
}

export const deletePost = async (id: number) => {
  const response = axios.delete(`https://62a6df6097b6156bff813771.mockapi.io/fakeData/${id}`);
  return response;
}

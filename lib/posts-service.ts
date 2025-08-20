import axios from "axios";

export interface Post {
  id: number;
  title: string;
  body: string;
}

export const fetchPosts = async () => {
  const res = await axios.get<{ posts: Post[] }>("https://dummyjson.com/posts");
  return res.data.posts;
};

export const fetchPostById = async (postId: Post["id"]) => {
  const res = await axios.get<Post>(`https://dummyjson.com/posts/${postId}`);
  return res.data;
};

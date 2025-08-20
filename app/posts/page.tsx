import { fetchPosts } from "@/lib/posts-service";
import Link from "next/link";

export default async function PostsPage() {
  const posts = await fetchPosts();

  return (
    <div>
      <h1>Posts page</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/posts/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

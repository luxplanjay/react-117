import { fetchPostById } from "@/lib/posts-service";
import BackButton from "./BackButton";

type Props = {
  params: Promise<{ postId: string }>;
};

export default async function SinglePostPage({ params }: Props) {
  const { postId } = await params;

  const post = await fetchPostById(Number(postId));

  return (
    <div>
      <BackButton />
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
}

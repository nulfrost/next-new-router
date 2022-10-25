import { experimental_use as use } from "react";
import Link from "next/link";

async function getPost(id) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );

  return response.json();
}

export default function Page({ params }) {
  const post = use(getPost(params.id));

  return (
    <div>
      <Link href="/posts">Back to posts</Link>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>
  );
}

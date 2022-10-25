import { experimental_use as use } from "react";
import Link from "next/link";

export async function fetchPosts() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");

  return response.json();
}

export default function Page() {
  const posts = use(fetchPosts());

  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>
          {" "}
          <Link href={`/posts/${post.id}`}>{post.title}</Link>
        </li>
      ))}
    </ul>
  );
}

import { FC, use } from 'react';
import { PostType } from '../types';

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const fetchPosts = async (): Promise<PostType[]> => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
    cache: 'no-store',
  });
  await sleep(2500);
  return response.json();
};

export const PostList: FC = () => {
  const posts = use(fetchPosts());

  return (
    <ul>
      {posts.map((post: PostType) => (
        <li key={post.id}>
          <p>{post.title}</p>
          <p>{post.body}</p>
        </li>
      ))}
    </ul>
  );
};

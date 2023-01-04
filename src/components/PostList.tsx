import { FC, use } from 'react';
import { PostType } from '../types';

const fetchPosts = async (): Promise<PostType[]> => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
    cache: 'no-store',
  });
  return response
    .json()
    .then(
      (data) => new Promise((resolve) => setTimeout(() => resolve(data), 2000))
    );
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

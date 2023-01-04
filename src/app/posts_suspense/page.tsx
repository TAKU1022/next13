import { NextPage } from 'next';
import { Suspense } from 'react';
import { PostList } from '../../components/PostList';

const PostsSuspensePage: NextPage = () => {
  return (
    <div>
      <h1>Posts Suspense</h1>
      <Suspense fallback={<p>Loading...</p>}>
        <PostList />
      </Suspense>
    </div>
  );
};

export default PostsSuspensePage;

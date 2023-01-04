import { NextPage } from 'next';
import { PostList } from '../../components/PostList';

const PostsPage: NextPage = () => {
  return (
    <div>
      <h1>Posts</h1>
      <PostList />
    </div>
  );
};

export default PostsPage;

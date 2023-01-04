import { NextPage } from 'next';
import Link from 'next/link';

const HomePage: NextPage = () => {
  return (
    <div>
      <h1>Home</h1>
      <ul>
        <li>
          <Link href="/posts">posts</Link>
        </li>
        <li>
          <Link href="/posts_suspense">posts suspense</Link>
        </li>
      </ul>
    </div>
  );
};

export default HomePage;

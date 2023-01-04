import Link from 'next/link';
import { ReactNode } from 'react';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <p>
        <Link href="/">back</Link>
      </p>
      {children}
    </>
  );
};

export default Layout;

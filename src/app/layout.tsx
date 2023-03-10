import { GlobalFooter } from '../components/GlobalFooter';
import { GlobalHeader } from '../components/GlobalHeader';

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="ja">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <GlobalHeader />
        <main>{children}</main>
        <GlobalFooter />
      </body>
    </html>
  );
};

export default RootLayout;

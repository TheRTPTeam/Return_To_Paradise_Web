import styles from './styles.module.scss';

type RootLayoutProps = {
  children: React.ReactNode;
};

export const RootLayout = ({
  children,
}: RootLayoutProps) => {
  return (
    <html className={styles.html} lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className={styles.body}>
        <div className={styles.root}>
          {children}
        </div>
      </body>
    </html>
  );
};

export default RootLayout;

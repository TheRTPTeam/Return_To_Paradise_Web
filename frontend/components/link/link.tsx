import styles from './link.module.scss';

type LinkTarget = '_self' | '_blank' | '_parent' | '_top';

export type LinkProps = {
  children: React.ReactNode;
  href: string;
  target?: LinkTarget;
};

const Link = ({
  children,
  href,
  target = '_self',
}: LinkProps) => {
  return (
    <a className={styles.link} href={href} target={target}>{children}</a>
  )
};

export default Link;

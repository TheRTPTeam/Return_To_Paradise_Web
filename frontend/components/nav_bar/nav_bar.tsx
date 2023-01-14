import Text from "@components/text/text";
import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import styles from "./nav_bar.module.scss";

type NavBarProps = {
  className?: string;
};

const NavBar = ({ className }: NavBarProps) => {
  return (
    <div className={classNames(styles.nav_bar, className)}>
      <Image
        className={styles.image}
        src="/rtp_logo.png"
        alt="rtp logo"
        width={70}
        height={70}
      />
      <Link className={styles.link} href="/about">
        <Text.FunLarge className={styles.label}>About</Text.FunLarge>
      </Link>
      <Link className={styles.link} href="/news">
        <Text.FunLarge className={styles.label}>News</Text.FunLarge>
      </Link>
      <Link className={styles.link} href="/downloads">
        <Text.FunLarge className={styles.label}>Downloads</Text.FunLarge>
      </Link>
      <Link className={styles.link} href="/privacy-policy">
        <Text.FunLarge className={styles.label}>Privacy Policy</Text.FunLarge>
      </Link>
      <Link className={styles.link} href="/contact">
        <Text.FunLarge className={styles.label}>Contact</Text.FunLarge>
      </Link>
      <Link className={styles.link} href="/wiki">
        <Text.FunLarge className={styles.label}>Wiki</Text.FunLarge>
      </Link>
    </div>
  );
};

export default NavBar;

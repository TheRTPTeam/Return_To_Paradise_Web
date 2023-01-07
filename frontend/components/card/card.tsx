import classNames from "classnames";
import styles from './card.module.scss';

type CardProps = {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
};

const Card = ({
  children,
  className,
  onClick,
}: CardProps) => {
  if (onClick) {
    return (
      <button className={classNames(styles.clickableCard, className)} onClick={onClick}>
        {children}
      </button>
    );
  }
  return (
    <div className={classNames(styles.card, className)}>
      {children}
    </div>
  );
};

export default Card;

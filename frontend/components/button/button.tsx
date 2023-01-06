import Text from '@components/text/text';
import classNames from 'classnames';
import styles from './button.module.scss';

type ButtonProps = {
  children: string;
  className?: string;
  textClassName?: string;
  onClick?: () => void;
};

const Button = ({
  children,
  className,
  textClassName,
  onClick,
}: ButtonProps) => {
  return (
    <button className={classNames(styles.button, className)} onClick={onClick}>
      <Text.FunLarge className={classNames(styles.label, textClassName)}>
        {children}
      </Text.FunLarge>
    </button>
  );
};

export default Button;

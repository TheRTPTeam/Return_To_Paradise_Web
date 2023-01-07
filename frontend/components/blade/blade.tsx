import classNames from 'classnames';
import styles from './blade.module.scss';

type BladeProps = {
  children: React.ReactNode,
  className?: string,
};

const Blade = ({
  children,
  className,
}: BladeProps) => {
  return (
    <div className={classNames(styles.blade, className)}>
      {children}
    </div>
  );
};

export default Blade;

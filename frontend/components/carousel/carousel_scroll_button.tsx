import classNames from 'classnames';
import Image from 'next/image';
import chevronLeft from './assets/chevron_left.svg';
import chevronRight from './assets/chevron_right.svg';
import styles from './carousel_scroll_button.module.scss';

type CarouselScrollButtonProps = {
  className?: string;
  orientation: 'left' | 'right';
  disabled?: boolean;
  onClick: () => void;
};

const CarouselScrollButton = ({
  className,
  orientation,
  disabled = false,
  onClick,
}: CarouselScrollButtonProps) => {
  return (
    <button className={classNames(styles.button, className)} onClick={onClick}>
      <Image
        className={classNames(
          {
            [styles.buttonDisabled]: disabled,
          },
          styles.icon
        )}
        src={orientation === 'left' ? chevronLeft : chevronRight}
        alt={orientation === 'left' ? 'Chevron left' : 'Chevron right'}/>
    </button>
  );
};

export default CarouselScrollButton;

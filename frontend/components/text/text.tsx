import { Inter, Irish_Grover } from '@next/font/google';
import classNames from 'classnames';
import styles from './text.module.scss';

const inter = Inter({});
const irishGrover = Irish_Grover({ weight: '400' });

type TextAllowedTags = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'div';
type TextAllowedFonts = 'Inter' | 'Irish_Grover';

type TextProps = {
  children: React.ReactNode;
  className?: string;
  tag?: TextAllowedTags;
  font?: TextAllowedFonts;
};

const Text = ({
  children,
  className,
  tag = 'p',
  font = 'Inter',
}: TextProps) => {
  const TextTag = tag;

  const getFont = (font: TextAllowedFonts) => {
    switch (font) {
      case 'Inter':
        return inter;
      case 'Irish_Grover':
        return irishGrover;
      default:
        throw new Error(font);
    }
  };

  return (
    <TextTag className={classNames(styles.text, getFont(font).className, className)}>{children}</TextTag>
  );
};

export default Text;

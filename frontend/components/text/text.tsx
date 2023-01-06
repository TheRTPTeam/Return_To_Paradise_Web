import { NextFont } from '@next/font/dist/types';
import { Inter, Irish_Grover } from '@next/font/google';
import classNames from 'classnames';
import styles from './text.module.scss';

const inter = Inter({ subsets: ['latin'] });
const irishGrover = Irish_Grover({ weight: '400', subsets: ['latin'] });

type TextAllowedTags = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'div';

type TextProps = {
  children: string;
  className?: string;
  tag?: TextAllowedTags;
};

const createText = (defaultTag: TextAllowedTags, className: string, font: NextFont) => {
  const baseClassName = className;
  return ({
    children,
    className,
    tag,
  }: TextProps) => {
    const Tag = tag ?? defaultTag;
    return (
      <Tag className={classNames(baseClassName, font.className, className)}>
        {children}
      </Tag>
    )
  };
};

namespace Text {
  export const TitleSansLargeBold = createText('h1', styles.titleSansLargeBold, inter);
  export const TitleSansLarge = createText('h1', styles.titleSansLarge, inter);
  export const TitleSansSmallBold = createText('h1', styles.titleSansSmallBold, inter);
  export const SansMedium = createText('p', styles.sansMedium, inter);
  export const TitleFunExtraLarge = createText('h1', styles.titleFunExtraLarge, irishGrover);
  export const TitleFunLarge = createText('h1', styles.titleFunLarge, irishGrover);
  export const FunLarge = createText('p', styles.funLarge, irishGrover);
  export const FunMedium = createText('p', styles.funMedium, irishGrover);
};

export default Text;

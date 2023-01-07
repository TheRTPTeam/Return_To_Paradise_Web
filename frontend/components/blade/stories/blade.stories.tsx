import { StoryObj, Meta } from '@storybook/react';
import Button from '@components/button/button';
import Text from '@components/text/text';
import Blade from '../blade';
import styles from './blade.stories.module.scss';

export default {
  component: Blade,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta<typeof Blade>;

export const Primary: StoryObj<typeof Blade> = {
  render: () => (
    <>
      <Blade className={styles.primaryBlade1}>
        <Text.SansMedium>
          This is some text inside a blade
        </Text.SansMedium>
        <Button>
          This is a button inside the same blade
        </Button>
      </Blade>
      <Blade className={styles.primaryBlade2}>
        <Text.TitleSansLarge className={styles.primaryBlade2Text}>
          This is some text inside another blade with padding
        </Text.TitleSansLarge>
      </Blade>
    </>
  ),
};

import { StoryObj, Meta } from '@storybook/react';

import Text from '../text';

export default {
  component: Text.TitleSansLargeRegular,
} as Meta<typeof Text.TitleSansLargeRegular>;

export const TitleSansLargeRegular: StoryObj<typeof Text.TitleSansLargeRegular> = {
  args: {
    children: 'TitleSansLargeRegular',
  },
};

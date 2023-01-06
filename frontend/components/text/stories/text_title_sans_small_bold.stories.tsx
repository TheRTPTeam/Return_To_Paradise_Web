import { StoryObj, Meta } from '@storybook/react';

import Text from '../text';

export default {
  component: Text.TitleSansSmallBold,
} as Meta<typeof Text.TitleSansSmallBold>;

export const TitleSansSmallBold: StoryObj<typeof Text.TitleSansSmallBold> = {
  args: {
    children: 'TitleSansSmallBold',
  },
};

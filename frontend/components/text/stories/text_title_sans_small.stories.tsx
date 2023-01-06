import { StoryObj, Meta } from '@storybook/react';

import Text from '../text';

export default {
  component: Text.TitleSansSmall,
} as Meta<typeof Text.TitleSansSmall>;

export const TitleSansSmall: StoryObj<typeof Text.TitleSansSmall> = {
  args: {
    children: 'TitleSansSmall',
  },
};

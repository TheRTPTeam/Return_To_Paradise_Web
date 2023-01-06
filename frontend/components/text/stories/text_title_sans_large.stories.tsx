import { StoryObj, Meta } from '@storybook/react';

import Text from '../text';

export default {
  component: Text.TitleSansLarge,
} as Meta<typeof Text.TitleSansLarge>;

export const TitleSansLarge: StoryObj<typeof Text.TitleSansLarge> = {
  args: {
    children: 'TitleSansLarge',
  },
};

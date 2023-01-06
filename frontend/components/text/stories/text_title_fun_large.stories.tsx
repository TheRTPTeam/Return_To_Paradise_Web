import { StoryObj, Meta } from '@storybook/react';

import Text from '../text';

export default {
  component: Text.TitleFunLarge,
} as Meta<typeof Text.TitleFunLarge>;

export const TitleFunLarge: StoryObj<typeof Text.TitleFunLarge> = {
  args: {
    children: 'TitleFunLarge',
  },
};

import { StoryObj, Meta } from '@storybook/react';

import Text from '../text';

export default {
  component: Text.FunLarge,
} as Meta<typeof Text.FunLarge>;

export const FunLarge: StoryObj<typeof Text.FunLarge> = {
  args: {
    children: 'FunLarge',
  },
};

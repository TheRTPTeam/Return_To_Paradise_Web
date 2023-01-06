import { StoryObj, Meta } from '@storybook/react';

import Text from '../text';

export default {
  component: Text.FunLarge,
  parameters: {
    controls: {
      include: ['children'],
    },
  },
} as Meta<typeof Text.FunLarge>;

export const FunLarge: StoryObj<typeof Text.FunLarge> = {
  args: {
    children: 'FunLarge',
  },
};

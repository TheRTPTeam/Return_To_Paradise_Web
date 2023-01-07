import { StoryObj, Meta } from '@storybook/react';
import Text from '../text';

export default {
  component: Text.TitleFunLarge,
  parameters: {
    controls: {
      include: ['children'],
    },
  },
} as Meta<typeof Text.TitleFunLarge>;

export const Primary: StoryObj<typeof Text.TitleFunLarge> = {
  args: {
    children: 'TitleFunLarge',
  },
};

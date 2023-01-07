import { StoryObj, Meta } from '@storybook/react';
import Text from '../text';

export default {
  component: Text.SansMedium,
  parameters: {
    controls: {
      include: ['children'],
    },
  },
} as Meta<typeof Text.SansMedium>;

export const Primary: StoryObj<typeof Text.SansMedium> = {
  args: {
    children: 'SansMedium',
  },
};

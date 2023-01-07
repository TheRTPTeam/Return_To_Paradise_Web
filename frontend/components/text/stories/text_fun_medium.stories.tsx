import { StoryObj, Meta } from '@storybook/react';
import Text from '../text';

export default {
  component: Text.FunMedium,
  parameters: {
    controls: {
      include: ['children'],
    },
  },
} as Meta<typeof Text.FunMedium>;

export const Primary: StoryObj<typeof Text.FunMedium> = {
  args: {
    children: 'FunMedium',
  },
};

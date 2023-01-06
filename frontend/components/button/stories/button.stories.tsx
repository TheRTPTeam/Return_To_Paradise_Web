import { StoryObj, Meta } from '@storybook/react';

import Button from '../button';

export default {
  component: Button,
  parameters: {
    controls: {
      include: ['children'],
    },
  },
} as Meta<typeof Button>;

export const Primary: StoryObj<typeof Button> = {
  args: {
    children: 'Click me!',
  },
};

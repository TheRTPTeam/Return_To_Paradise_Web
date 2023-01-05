import { StoryObj, Meta } from '@storybook/react';

import Text from '../text';

export default {
  component: Text,
} as Meta<typeof Text>;

export const Simple: StoryObj<typeof Text> = {
  args: {
    children: 'A text component',
  },
};

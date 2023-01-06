import { StoryObj, Meta } from '@storybook/react';

import Text from '../text';

export default {
  component: Text.FunMedium,
} as Meta<typeof Text.FunMedium>;

export const FunMedium: StoryObj<typeof Text.FunMedium> = {
  args: {
    children: 'FunMedium',
  },
};

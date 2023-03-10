import { StoryObj, Meta } from '@storybook/react';
import Text from '../text';

export default {
  component: Text.TitleSansSmallBold,
  parameters: {
    controls: {
      include: ['children'],
    },
  },
} as Meta<typeof Text.TitleSansSmallBold>;

export const Primary: StoryObj<typeof Text.TitleSansSmallBold> = {
  args: {
    children: 'TitleSansSmallBold',
  },
};

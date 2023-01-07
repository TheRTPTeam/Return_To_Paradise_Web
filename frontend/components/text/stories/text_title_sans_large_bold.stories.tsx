import { StoryObj, Meta } from '@storybook/react';
import Text from '../text';

export default {
  component: Text.TitleSansLargeBold,
  parameters: {
    controls: {
      include: ['children'],
    },
  },
} as Meta<typeof Text.TitleSansLargeBold>;

export const Primary: StoryObj<typeof Text.TitleSansLargeBold> = {
  args: {
    children: 'TitleSansLargeBold',
  },
};

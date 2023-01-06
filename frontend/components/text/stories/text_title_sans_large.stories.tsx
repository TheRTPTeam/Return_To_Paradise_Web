import { StoryObj, Meta } from '@storybook/react';
import Text from '../text';

export default {
  component: Text.TitleSansLarge,
  parameters: {
    controls: {
      include: ['children'],
    },
  },
} as Meta<typeof Text.TitleSansLarge>;

export const TitleSansLarge: StoryObj<typeof Text.TitleSansLarge> = {
  args: {
    children: 'TitleSansLarge',
  },
};

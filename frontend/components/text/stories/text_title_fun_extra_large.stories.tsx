import { StoryObj, Meta } from '@storybook/react';
import Text from '../text';

export default {
  component: Text.TitleFunExtraLarge,
  parameters: {
    controls: {
      include: ['children'],
    },
  },
} as Meta<typeof Text.TitleFunExtraLarge>;

export const Primary: StoryObj<typeof Text.TitleFunExtraLarge> = {
  args: {
    children: 'TitleFunExtraLarge',
  },
};

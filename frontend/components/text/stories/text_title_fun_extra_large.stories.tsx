import { StoryObj, Meta } from '@storybook/react';

import Text from '../text';

export default {
  component: Text.TitleFunExtraLarge,
} as Meta<typeof Text.TitleFunExtraLarge>;

export const TitleFunExtraLarge: StoryObj<typeof Text.TitleFunExtraLarge> = {
  args: {
    children: 'TitleFunExtraLarge',
  },
};

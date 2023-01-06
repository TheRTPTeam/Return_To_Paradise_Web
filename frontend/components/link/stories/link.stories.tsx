import { StoryObj, Meta } from '@storybook/react';
import Text from '@components/text/text';
import Link from '../link';

export default {
  component: Link,
  parameters: {
    controls: {
      include: ['children', 'href', 'target'],
    },
  },
} as Meta<typeof Link>;

export const Primary: StoryObj<typeof Link> = {
  render: (args) => (
    <Text.SansMedium>
      This is <Link {...args} /> within some text
    </Text.SansMedium>
  ),
  args: {
    children: 'a link',
    href: 'https://www.returntoparadise.com',
  },
};

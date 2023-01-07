import { StoryObj, Meta } from '@storybook/react';
import Text from '@components/text/text';
import Card from '../card';

export default {
  component: Card,
  parameters: {
    controls: {
      include: [],
    },
  },
} as Meta<typeof Card>;

export const Default: StoryObj<typeof Card> = {
  render: () => (
    <Card>
      <Text.SansMedium>
        This is some text<br />inside a card
      </Text.SansMedium>
    </Card>
  ),
};

export const Clickable: StoryObj<typeof Card> = {
  render: (args) => (
    <Card {...args}>
      <Text.SansMedium>
        This is a<br />clickable card
      </Text.SansMedium>
    </Card>
  ),
  parameters: {
    controls: {
      include: ['onClick'],
    },
  },
  argTypes: {
    onClick: {
      action: 'clicked',
    }
  },
};

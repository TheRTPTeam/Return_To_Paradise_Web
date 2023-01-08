import { StoryObj, Meta } from '@storybook/react';
import Card from '@components/card/card';
import Text from '@components/text/text';
import Carousel from '../carousel';
import styles from './carousel.stories.module.scss';

export default {
  component: Carousel,
} as Meta<typeof Carousel>;

export const Primary: StoryObj<typeof Carousel> = {
  render: () => (
    <Carousel className={styles.carousel}>
      <Card className={styles.card1}>
        <Text.SansMedium>
          This is some text<br />inside a card
        </Text.SansMedium>
      </Card>
      <Card className={styles.card2}>
        <Text.SansMedium>
          This is some text<br />inside a card
        </Text.SansMedium>
      </Card>
      <Card className={styles.card3}>
        <Text.SansMedium>
          This is some text<br />inside a card
        </Text.SansMedium>
      </Card>
      <Card className={styles.card4}>
        <Text.SansMedium>
          This is some text<br />inside a card
        </Text.SansMedium>
      </Card>
      <Card className={styles.card5}>
        <Text.SansMedium>
          This is some text<br />inside a card
        </Text.SansMedium>
      </Card>
      <Card className={styles.card6}>
        <Text.SansMedium>
          This is some text<br />inside a card
        </Text.SansMedium>
      </Card>
      <Card className={styles.card7}>
        <Text.SansMedium>
          This is some text<br />inside a card
        </Text.SansMedium>
      </Card>
      <Card className={styles.card8}>
        <Text.SansMedium>
          This is some text<br />inside a card
        </Text.SansMedium>
      </Card>
    </Carousel>
  ),
};

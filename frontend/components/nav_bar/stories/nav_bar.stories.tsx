import { StoryObj, Meta } from "@storybook/react";
import NavBar from "../nav_bar";

export default {
  component: NavBar,
  parameters: {
    layout: "fullscreen",
  },
} as Meta<typeof NavBar>;

export const Primary: StoryObj<typeof NavBar> = {
  render: () => (
    <>
      <NavBar />
    </>
  ),
};

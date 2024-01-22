import type { Meta, StoryObj } from "@storybook/react";

import { CommonPageArgs } from "../themes-common";

import ErrorPage from "./error";

const meta = {
  component: ErrorPage,
  parameters: {
    layout: "centered",
  },
  argTypes: {},
} satisfies Meta<typeof ErrorPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: CommonPageArgs,
};

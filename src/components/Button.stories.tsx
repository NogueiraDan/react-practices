import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

const meta = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Primary",
    type: "primary",
  },
};

export const Secondary: Story = {
  args: {
    label: "Secondary",
    type: "secondary",
  },
};

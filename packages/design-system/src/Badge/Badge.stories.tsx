import type { Meta, StoryObj } from '@storybook/react';

import { Badge, BadgeProps, BadgeSize } from './Badge.tsx';

const meta = {
  title: 'Example/Badge',
  component: Badge,
  tags: ['autodocs']
} satisfies Meta<BadgeProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Default'
  }
};

export const Small: Story = {
  args: {
    children: 'Small',
    size: BadgeSize.Small
  }
};

export const Medium: Story = {
  args: {
    children: 'Medium',
    size: BadgeSize.Medium
  }
};

export const Large: Story = {
  args: {
    children: 'Large',
    size: BadgeSize.Large
  }
};

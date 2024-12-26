import type { Meta, StoryObj } from '@storybook/react';
import { Badge, BadgeProps } from '@repo/design-system/badge';

const meta = {
  title: 'Example/Badge',
  component: Badge,
  tags: ['autodocs']
} satisfies Meta<BadgeProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    value: '27'
  }
};

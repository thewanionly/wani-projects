import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from '@repo/design-system/badge';

const meta = {
  title: 'Example/Badge',
  component: Badge,
  tags: ['autodocs']
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    value: '27'
  }
};

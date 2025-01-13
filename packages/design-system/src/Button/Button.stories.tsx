import type { Meta, StoryObj } from '@storybook/react';

import { Button, ButtonProps, ButtonSize, ButtonVariant } from './Button.tsx';

const meta = {
  title: 'Design System/Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    size: {
      options: Object.values(ButtonSize),
      control: { type: 'select' },
      defaultValue: ButtonSize.Medium,
    },
    variant: {
      options: Object.values(ButtonVariant),
      control: { type: 'select' },
      defaultValue: ButtonVariant.Primary,
    },
  },
  parameters: {
    controls: { exclude: ['className'] },
  },
} satisfies Meta<ButtonProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: 'Primary',
  },
};

export const PrimaryDisabled: Story = {
  args: {
    label: 'Primary Disabled',
    disabled: true,
  },
};

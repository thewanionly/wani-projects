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
    children: 'Primary',
  },
};

export const PrimaryDisabled: Story = {
  args: {
    children: 'Primary (Disabled)',
    disabled: true,
  },
};

export const Secondary: Story = {
  args: {
    children: 'Secondary',
    variant: ButtonVariant.Secondary,
  },
};

export const SecondaryDisabled: Story = {
  args: {
    children: 'Secondary (Disabled)',
    variant: ButtonVariant.Secondary,
    disabled: true,
  },
};

export const Tertiary: Story = {
  args: {
    children: 'Tertiary',
    variant: ButtonVariant.Tertiary,
  },
};

export const TertiaryDisabled: Story = {
  args: {
    children: 'Tertiary (Disabled)',
    variant: ButtonVariant.Tertiary,
    disabled: true,
  },
};

export const LinkColor: Story = {
  args: {
    children: 'Link Color',
    variant: ButtonVariant.LinkColor,
  },
};

export const LinkColorDisabled: Story = {
  args: {
    children: 'Link Color (Disabled)',
    variant: ButtonVariant.LinkColor,
    disabled: true,
  },
};

export const LinkGray: Story = {
  args: {
    children: 'Link Gray',
    variant: ButtonVariant.LinkGray,
  },
};

export const LinkGrayDisabled: Story = {
  args: {
    children: 'Link Gray (Disabled)',
    variant: ButtonVariant.LinkGray,
    disabled: true,
  },
};

export const Destructive: Story = {
  args: {
    children: 'Destructive',
    variant: ButtonVariant.Destructive,
  },
};

export const DestructiveDisabled: Story = {
  args: {
    children: 'Destructive (Disabled)',
    variant: ButtonVariant.Destructive,
    disabled: true,
  },
};

export const Medium: Story = {
  args: {
    children: 'Medium',
    size: ButtonSize.Medium,
  },
};

export const Large: Story = {
  args: {
    children: 'Large',
    size: ButtonSize.Large,
  },
};

export const ExtraLarge: Story = {
  args: {
    children: 'Extra Large',
    size: ButtonSize.ExtraLarge,
  },
};

export const ExtraLarge2: Story = {
  args: {
    children: 'Extra Large 2',
    size: ButtonSize.ExtraLarge2,
  },
};

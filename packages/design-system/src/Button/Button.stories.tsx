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
    label: 'Primary (Disabled)',
    disabled: true,
  },
};

export const Secondary: Story = {
  args: {
    label: 'Secondary',
    variant: ButtonVariant.Secondary,
  },
};

export const SecondaryDisabled: Story = {
  args: {
    label: 'Secondary (Disabled)',
    variant: ButtonVariant.Secondary,
    disabled: true,
  },
};

export const Tertiary: Story = {
  args: {
    label: 'Tertiary',
    variant: ButtonVariant.Tertiary,
  },
};

export const TertiaryDisabled: Story = {
  args: {
    label: 'Tertiary (Disabled)',
    variant: ButtonVariant.Tertiary,
    disabled: true,
  },
};

export const LinkColor: Story = {
  args: {
    label: 'Link Color',
    variant: ButtonVariant.LinkColor,
  },
};

export const LinkColorDisabled: Story = {
  args: {
    label: 'Link Color (Disabled)',
    variant: ButtonVariant.LinkColor,
    disabled: true,
  },
};

export const LinkGray: Story = {
  args: {
    label: 'Link Gray',
    variant: ButtonVariant.LinkGray,
  },
};

export const LinkGrayDisabled: Story = {
  args: {
    label: 'Link Gray (Disabled)',
    variant: ButtonVariant.LinkGray,
    disabled: true,
  },
};

export const Destructive: Story = {
  args: {
    label: 'Destructive',
    variant: ButtonVariant.Destructive,
  },
};

export const DestructiveDisabled: Story = {
  args: {
    label: 'Destructive (Disabled)',
    variant: ButtonVariant.Destructive,
    disabled: true,
  },
};

export const Medium: Story = {
  args: {
    label: 'Medium',
    size: ButtonSize.Medium,
  },
};

export const Large: Story = {
  args: {
    label: 'Large',
    size: ButtonSize.Large,
  },
};

export const ExtraLarge: Story = {
  args: {
    label: 'Extra Large',
    size: ButtonSize.ExtraLarge,
  },
};

export const ExtraLarge2: Story = {
  args: {
    label: 'Extra Large 2',
    size: ButtonSize.ExtraLarge2,
  },
};

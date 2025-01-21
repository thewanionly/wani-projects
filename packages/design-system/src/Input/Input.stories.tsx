import type { Meta, StoryObj } from '@storybook/react';

import { Input, InputProps } from './Input.tsx';

const meta = {
  title: 'Design System/Components/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {},
  parameters: {
    controls: { exclude: ['className'] },
  },
} satisfies Meta<InputProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: 'name@email.com',
    type: 'email',
    id: 'email',
    label: 'Email',
    hint: 'This is a hint text',
  },
};

export const DefaultDisabled: Story = {
  args: {
    placeholder: 'name@email.com',
    type: 'email',
    id: 'email',
    label: 'Email',
    hint: 'This is a hint text',
    disabled: true,
  },
};

export const DefaultFilled: Story = {
  args: {
    placeholder: 'name@email.com',
    type: 'email',
    id: 'email',
    label: 'Email',
    hint: 'This is a hint text',
    value: 'myemail@emai.com',
  },
};

export const DefaultFilledDisabled: Story = {
  args: {
    placeholder: 'name@email.com',
    type: 'email',
    id: 'email',
    label: 'Email',
    hint: 'This is a hint text',
    value: 'myemail@email.com',
    disabled: true,
  },
};

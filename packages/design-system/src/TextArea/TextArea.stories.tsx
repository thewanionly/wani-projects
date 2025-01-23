import type { Meta, StoryObj } from '@storybook/react';

import { TextArea, TextAreaProps } from './TextArea.tsx';

const meta = {
  title: 'Design System/Components/TextArea',
  component: TextArea,
  tags: ['autodocs'],
  argTypes: {},
  parameters: {
    controls: { exclude: ['className'] },
  },
} satisfies Meta<TextAreaProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
    id: 'description',
    label: 'Description',
    placeholder: 'Write your message...',
    maxLength: 500,
  },
};

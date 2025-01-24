import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/react';

import * as stories from './TextArea.stories.tsx';

const { Normal, Disabled } = composeStories(stories);

describe('TextArea', () => {
  it(`displays textarea's label`, async () => {
    render(<Normal />);

    const label = screen.getByText(Normal.args.label as string);
    expect(label).toBeInTheDocument();
  });

  it(`displays textarea associated with the label`, async () => {
    render(<Normal />);

    // textArea
    const textArea = screen.getByRole('textbox');
    expect(textArea).toBeInTheDocument();

    // textArea by label
    const textAreaByLabel = screen.getByLabelText(Normal.args.label as string);
    expect(textAreaByLabel).toBeInTheDocument();
  });

  it('displays textarea element associated with the placeholder', async () => {
    render(<Normal />);

    // input
    const textArea = screen.getByRole('textbox');
    expect(textArea).toBeInTheDocument();

    // input by placeholder
    const textAreaByPlaceholder = screen.getByPlaceholderText(Normal.args.placeholder as string);
    expect(textAreaByPlaceholder).toBeInTheDocument();
  });

  it('displays a disabled textarea element', async () => {
    render(<Disabled />);

    const textArea = screen.getByRole('textbox');
    expect(textArea).toBeDisabled();
  });
});

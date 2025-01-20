import { render, screen } from '@testing-library/react';

import { composeStories } from '@storybook/react';

import * as stories from './Input.stories.tsx';

const { Default } = composeStories(stories);

jest.mock('lucide-react', () => ({
  CircleHelp: () => <div data-testid="icon">Star Icon</div>,
}));

describe('Input', () => {
  it(`displays input's label`, async () => {
    render(<Default />);

    const label = screen.getByText(Default.args.label as string);
    expect(label).toBeInTheDocument();
  });

  it('displays input element associated with the label', async () => {
    render(<Default />);

    // input
    const inputEl = screen.getByRole('textbox');
    expect(inputEl).toBeInTheDocument();

    // input by label
    const inputElByLabel = screen.getByLabelText(Default.args.label as string);
    expect(inputElByLabel).toBeInTheDocument();
  });

  it('displays hint text', async () => {
    render(<Default />);

    const hint = screen.getByText(Default.args.hint as string);
    expect(hint).toBeInTheDocument();
  });
});

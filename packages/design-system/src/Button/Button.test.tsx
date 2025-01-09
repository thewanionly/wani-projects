import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/react';

import * as stories from './Button.stories.tsx';

const { Primary, PrimaryDisabled } = composeStories(stories);

describe('Button', () => {
  it('displays Button component', async () => {
    // ARRANGE
    render(<Primary />);

    // ACT
    // ASSERT
    const buttonEl = screen.getByRole('button');
    expect(buttonEl).toBeInTheDocument();
  });

  it(`displays Button's label`, async () => {
    // ARRANGE
    render(<Primary />);

    // ACT
    // ASSERT
    expect(screen.getByText(Primary.args.label as string)).toBeInTheDocument();
  });

  it(`displays a disabled button`, async () => {
    // ARRANGE
    render(<PrimaryDisabled />);

    // ACT
    // ASSERT
    const buttonEl = screen.getByRole('button');
    expect(buttonEl).toBeDisabled();
  });
});

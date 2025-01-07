import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/react';

import * as stories from './Button.stories.tsx';

const { Primary } = composeStories(stories);

describe('Button', () => {
  it('displays Button component', async () => {
    // ARRANGE
    render(<Primary />);

    // ACT
    // ASSERT
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it(`displayes Button's label`, async () => {
    // ARRANGE
    render(<Primary />);

    // ACT
    // ASSERT
    expect(screen.getByText(Primary.args.label as string)).toBeInTheDocument();
  });
});

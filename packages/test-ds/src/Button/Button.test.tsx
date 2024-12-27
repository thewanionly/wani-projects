import { render, screen } from '@testing-library/react';

import { composeStories } from '@storybook/react';
import * as stories from './Button.stories.tsx';

const { Primary } = composeStories(stories);

test('loads and displays greeting', async () => {
  // ARRANGE
  render(<Primary />);

  // ACT

  // ASSERT
  expect(screen.getByRole('button')).toBeInTheDocument();
  expect(screen.getByRole('button')).toHaveTextContent('Wee');
});

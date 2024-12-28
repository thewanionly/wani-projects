import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/react';

import * as stories from './Badge.stories.tsx';

const { Default } = composeStories(stories);

it('displays Badge component', async () => {
  // ARRANGE
  const value = '27';
  render(<Default>{value}</Default>);

  // ACT

  // ASSERT
  expect(screen.getByText(value)).toBeInTheDocument();
});

import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/react';

import * as stories from './Badge.stories.tsx';

const { Primary } = composeStories(stories);

it('displays Badge component', async () => {
  // ARRANGE
  const child = '27';
  render(<Primary>{child}</Primary>);

  // ACT

  // ASSERT
  expect(screen.getByText(child)).toBeInTheDocument();
});

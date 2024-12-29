import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/react';

import * as stories from './Badge.stories.tsx';

const { Default } = composeStories(stories);

describe('Badge', () => {
  it('displays Badge component', async () => {
    // ARRANGE
    render(<Default />);

    // ACT

    // ASSERT
    expect(screen.getByText(Default.args.children as string)).toBeInTheDocument();
  });
});

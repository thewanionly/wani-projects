import { render, screen } from '@testing-library/react';

import { composeStories } from '@storybook/react';

import * as stories from './Input.stories.tsx';

const { Default } = composeStories(stories);

describe('Input', () => {
  it('displays Input component', async () => {
    render(<Default />);

    const inputEl = screen.getByRole('textbox');
    expect(inputEl).toBeInTheDocument();
  });
});

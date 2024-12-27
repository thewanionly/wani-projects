import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { Button } from './Button.tsx';

test('loads and displays greeting', async () => {
  // ARRANGE
  render(<Button label='Wow' />);

  // ACT

  // ASSERT
  expect(screen.getByRole('button')).toBeInTheDocument();
});

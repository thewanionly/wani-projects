import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { Badge } from './Badge.tsx';

it('displays Badge component', async () => {
  // ARRANGE
  const value = '27';
  render(<Badge value={value} />);

  // ACT

  // ASSERT
  expect(screen.getByText(value)).toBeInTheDocument();
});

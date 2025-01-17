import '@testing-library/jest-dom';

jest.mock('lucide-react', () => ({
  Star: () => <div data-testid="icon">Star Icon</div>,
}));

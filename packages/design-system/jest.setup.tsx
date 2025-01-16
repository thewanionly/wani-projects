import '@testing-library/jest-dom';

jest.mock('lucide-react', () => ({
  Star: () => <div>Star Icon</div>,
}));

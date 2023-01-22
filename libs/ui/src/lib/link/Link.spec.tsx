import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Link from './Link';

describe('Link', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Link href="/page">Page</Link>, {
      wrapper: MemoryRouter,
    });
    expect(baseElement).toBeTruthy();
  });
});

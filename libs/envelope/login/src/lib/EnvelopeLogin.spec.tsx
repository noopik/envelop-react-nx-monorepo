import { render } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from 'react-query';
const queryClient = new QueryClient();
import { MemoryRouter } from 'react-router-dom';

import EnvelopeLogin from './EnvelopeLogin';

describe('EnvelopeLogin', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <QueryClientProvider client={queryClient}>
        <EnvelopeLogin />
      </QueryClientProvider>,
      {
        wrapper: MemoryRouter,
      }
    );
    expect(baseElement).toBeTruthy();
  });
});

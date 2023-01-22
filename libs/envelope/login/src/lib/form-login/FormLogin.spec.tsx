import { render } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { MemoryRouter } from 'react-router-dom';
import { FormLogin } from './FormLogin';
const queryClient = new QueryClient();
describe('FormLogin', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <QueryClientProvider client={queryClient}>
        <FormLogin />
      </QueryClientProvider>,
      {
        wrapper: MemoryRouter,
      }
    );
    expect(baseElement).toBeTruthy();
  });
});

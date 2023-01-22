import { render } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from 'react-query';
import Routes from './Routes';

const queryClient = new QueryClient();
describe('Routes', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <QueryClientProvider client={queryClient}>
        <Routes />
      </QueryClientProvider>
    );
    expect(baseElement).toBeTruthy();
  });
});

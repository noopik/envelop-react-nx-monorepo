import { QueryClient, QueryClientProvider } from 'react-query';
import Routes from './routes/Routes';

export function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Routes />
    </QueryClientProvider>
  );
}

export default App;

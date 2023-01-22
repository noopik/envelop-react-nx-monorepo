import { EnvelopeLogin } from '@nx-test-zog/envelope/login';
import { EnvelopeRegister } from '@nx-test-zog/envelope/register';
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes as Router,
} from 'react-router-dom';

/* eslint-disable-next-line */
export interface RoutesProps {}

export function Routes(props: RoutesProps) {
  return (
    <BrowserRouter>
      <Router>
        <Route path="/" element={<Navigate to={'/login'} replace />} />
        <Route path="/login" element={<EnvelopeLogin />} />
        <Route path="/register" element={<EnvelopeRegister />} />
      </Router>
    </BrowserRouter>
  );
}

export default Routes;

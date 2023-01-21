import styled from 'styled-components';
import { Route, Routes, Link } from 'react-router-dom';
import { EnvelopeRegister } from '@nx-test-zog/envelope/register';
import { EnvelopeLogin } from '@nx-test-zog/envelope/login';

const StyledApp = styled.div``;

export function App() {
  return (
    <StyledApp>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Link to="/login">Login Page</Link>
            </div>
          }
        />
        <Route path="/login" element={<EnvelopeLogin />} />
        <Route path="/register" element={<EnvelopeRegister />} />
      </Routes>
    </StyledApp>
  );
}

export default App;

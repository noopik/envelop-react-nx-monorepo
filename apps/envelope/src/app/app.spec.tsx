import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import App from './app';

describe('App', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App />);

    expect(baseElement).toBeTruthy();
  });

  it('should have a href to login page', () => {
    const { getByText } = render(<App />);

    const href = getByText(/Login Page/i).getAttribute('href');
    expect(href).toBe('/login');
  });
});

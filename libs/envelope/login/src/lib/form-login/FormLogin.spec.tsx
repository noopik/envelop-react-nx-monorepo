import { render } from '@testing-library/react';

import FormLogin from './FormLogin';

describe('FormLogin', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FormLogin />);
    expect(baseElement).toBeTruthy();
  });
});

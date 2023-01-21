import { render } from '@testing-library/react';

import EnvelopeLogin from './EnvelopeLogin';

describe('EnvelopeLogin', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<EnvelopeLogin />);
    expect(baseElement).toBeTruthy();
  });
});

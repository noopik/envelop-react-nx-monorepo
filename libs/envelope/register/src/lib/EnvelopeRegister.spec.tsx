import { render } from '@testing-library/react';

import EnvelopeRegister from './EnvelopeRegister';

describe('EnvelopeRegister', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<EnvelopeRegister />);
    expect(baseElement).toBeTruthy();
  });
});

import { render } from '@testing-library/react';

import Text from './text';

describe('Text', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Text>Texting test</Text>);
    expect(baseElement).toBeTruthy();
  });
});

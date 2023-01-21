import { render } from '@testing-library/react';

import IntroductionContent from './introduction-content';

describe('IntroductionContent', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<IntroductionContent />);
    expect(baseElement).toBeTruthy();
  });
});

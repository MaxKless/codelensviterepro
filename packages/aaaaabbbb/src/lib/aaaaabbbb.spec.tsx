import { render } from '@testing-library/react';

import Aaaaabbbb from './aaaaabbbb';

describe('Aaaaabbbb', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Aaaaabbbb />);
    expect(baseElement).toBeTruthy();
  });
});

import { render } from '@testing-library/react';

import PackagesNewlib2 from './packages-newlib2';

describe('PackagesNewlib2', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PackagesNewlib2 />);
    expect(baseElement).toBeTruthy();
  });
});

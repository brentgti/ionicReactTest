import { render, screen } from '@testing-library/react';
import React from 'react';
import Map from './Map';

test('renders learn react link', () => {
  const { container } = render(<Map />);
  expect(container.firstChild).toHaveClass('mapDiv');
});
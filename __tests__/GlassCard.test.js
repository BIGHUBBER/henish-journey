import React from 'react';
import { render } from '@testing-library/react';
import GlassCard from '../src/components/GlassCard';

describe('GlassCard Component', () => {
  it('applies the correct Liquid Glass styles', () => {
    const { container } = render(<GlassCard />);
    const card = container.firstChild;

    // Check for blur and border styles
    expect(card).toHaveStyle('backdrop-filter: blur(20px)');
    expect(card).toHaveStyle('border: 3px solid');
  });
});

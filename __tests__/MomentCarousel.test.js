import React from 'react';
import { render, screen, act } from '@testing-library/react';
import MomentCarousel from '../src/components/MomentCarousel';

const mockMoments = [
  { id: 1, imageUrl: 'image1.jpg', caption: 'Moment 1' },
  { id: 2, imageUrl: 'image2.jpg', caption: 'Moment 2' },
  { id: 3, imageUrl: 'image3.jpg', caption: 'Moment 3' },
];

describe('MomentCarousel Component', () => {
  it('autoplays and transitions between moments', async () => {
    jest.useFakeTimers();
    render(<MomentCarousel moments={mockMoments} />);

    // Initial moment
    expect(screen.getByText('Moment 1')).toBeInTheDocument();

    // Fast-forward time for autoplay
    act(() => {
      jest.advanceTimersByTime(5000);
    });

    // Next moment
    expect(screen.getByText('Moment 2')).toBeInTheDocument();
  });

  it('allows manual swiping', () => {
    render(<MomentCarousel moments={mockMoments} />);
    // Manual swipe logic would be tested here (e.g., using userEvent)
  });
});

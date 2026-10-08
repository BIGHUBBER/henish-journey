import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CountdownTimer from '../src/components/CountdownTimer';

// Mock the target date for consistent testing
const mockDate = new Date('2027-03-14T00:00:00Z');
jest.spyOn(global, 'Date').mockImplementation(() => mockDate);

describe('CountdownTimer Component', () => {
  it('displays the correct time remaining', () => {
    render(<CountdownTimer targetDate={mockDate} />);
    expect(screen.getByText(/0 days/i)).toBeInTheDocument();
    expect(screen.getByText(/0 hours/i)).toBeInTheDocument();
    expect(screen.getByText(/0 minutes/i)).toBeInTheDocument();
    expect(screen.getByText(/0 seconds/i)).toBeInTheDocument();
  });
});

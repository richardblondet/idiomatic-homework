import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('All elements are present', () => {
  const { container } = render(<App />);

  const T_prefix = container.querySelector('[id="T_prefix"]');
  const T_name = container.querySelector('[id="T_name"]');
  const L = container.querySelector('[id="List"]');
  const B_create = container.querySelector('[id="B_create"]');
  const B_update = container.querySelector('[id="B_update"]');
  const B_delete = container.querySelector('[id="B_delete"]');
  
  const label1 = screen.getByText(/Polar Bear/i);
  const label2 = screen.getByText(/Black Bear/i);
  const label3 = screen.getByText(/Brown Bear/i);
  const label4 = screen.getByText(/Grizzly Bear/i);

  expect(T_name).toBeInTheDocument();
  expect(L).toBeInTheDocument();
  expect(B_create).toBeInTheDocument();
  expect(B_update).toBeInTheDocument();
  expect(B_delete).toBeInTheDocument();
  expect(T_prefix).toBeInTheDocument();
  expect(label1).toBeInTheDocument();
  expect(label2).toBeInTheDocument();
  expect(label3).toBeInTheDocument();
  expect(label4).toBeInTheDocument();
});

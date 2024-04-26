import React from 'react';
import { render, screen } from '@testing-library/react';
import Main from '../main/index';  


jest.mock('../itens', () => () => <div>Mocked Itens Component</div>);

describe('Main Component', () => {
  test('renders Main component with Itens', () => {
    render(<Main />);
    expect(screen.getByText('Mocked Itens Component')).toBeInTheDocument();
  });

  test('renders container and box elements', () => {
    render(<Main />);
    expect(screen.getByTestId('containerMain')).toBeInTheDocument();
    expect(screen.getByTestId('boxMain')).toBeInTheDocument();
  });
});

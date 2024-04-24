import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from './index'; // Ajuste o caminho de importação conforme necessário

describe('Componente Home', () => {
  test('deve renderizar sem erros', () => {
    render(<Home />);
    const homeElement = screen.getByTestId('home'); // Certifique-se de que seu componente Home tem um atributo `data-testid="home"`
    expect(homeElement).toBeInTheDocument();
  });
});
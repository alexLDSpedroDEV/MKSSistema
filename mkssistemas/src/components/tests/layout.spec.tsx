import React from 'react';
import { render, screen, act } from '@testing-library/react';
import Home from '../home/index'; // Ajuste o caminho de importação conforme necessário
import { CarrinhoProdutos } from '../carrinho/index'; // Ajuste o caminho de importação conforme necessário

// Mockando módulos e importações necessárias
jest.mock('@/components/sideBar/index', () => ({
  __esModule: true,
  default: ({ setOpen }) => (
    <div>
      <button onClick={() => setOpen(false)}>Fechar Sidebar</button>
    </div>
  ),
}));

jest.mock('../itens', () => ({
  __esModule: true,
  default: () => <div>Componente de Itens</div>,
}));

jest.mock('../carrinho', () => ({
  getAllProducts: jest.fn(),
}));

describe('Componente Home', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
  });

  it('deve parar de carregar após 4 segundos', () => {
    render(<Home />);
    expect(screen.getByText('Carregando....')).toBeInTheDocument();

    act(() => {
      jest.advanceTimersByTime(4000);
    });

    expect(screen.queryByText('Carregando....')).not.toBeInTheDocument();
    expect(screen.getByText('Componente de Itens')).toBeInTheDocument();
  });

  it('deve atualizar o índice do carrinho a cada segundo', () => {
    CarrinhoProdutos.getAllProducts.mockReturnValue(new Array(3)); // Assume 3 produtos inicialmente
    render(<Home />);
    expect(screen.getByText('0')).toBeInTheDocument(); // Estado inicial

    act(() => {
      jest.advanceTimersByTime(1000);
    });

    expect(screen.getByText('3')).toBeInTheDocument(); // Estado atualizado após 1 segundo
  });
});
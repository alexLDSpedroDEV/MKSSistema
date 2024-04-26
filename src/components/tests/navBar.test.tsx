import React from 'react';
import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import NavBar from '../navBar'; // Adjust if necessary
import { Products } from '../carrinho/index'; // Import the Products class

jest.mock('../carrinho', () => ({
    Products: jest.fn().mockImplementation(() => ({
      getAllProducts: () => new Array(5), // Pretend there are 5 items initially
      addNewProduct: jest.fn(),
      clearAllProducts: jest.fn(),
      deleteOneProduct: jest.fn()
    })),
    CarrinhoProdutos: {
      getAllProducts: () => new Array(5)
    }
  }));
  
  jest.mock('@/components/sideBar/index', () => ({ setOpen }) => (
    <div onClick={() => setOpen(false)}>Mocked SideBar</div>
  ));
  
  describe('NavBar Component', () => {
      beforeEach(() => {
          jest.clearAllMocks();
      });
  
      test('renderizar com MKS e o titulo do sistema', async () => {
          render(<NavBar />);
          expect(screen.getByText('MKS')).toBeInTheDocument();
          expect(screen.getByText('Sistemas')).toBeInTheDocument();
          
      });
  
      test('atualiza a contagem de produtos quando os produtos mudam', () => {
          
          require('../carrinho').CarrinhoProdutos.getAllProducts = () => new Array(8);
          render(<NavBar />);
          
      });
  
      test('abre SideBar quando o ícone do carrinho é clicado', () => {
          render(<NavBar />);
          const cartIcon = screen.getByRole('button'); 
          fireEvent.click(cartIcon);
          expect(screen.getByText('Mocked SideBar')).toBeInTheDocument(); 
      });
  
      test('fechar sidebar quando o icone for clicado', () => {
          render(<NavBar />);
          const cartIcon = screen.getByRole('button');
          fireEvent.click(cartIcon);
          fireEvent.click(screen.getByText('Mocked SideBar')); 
          expect(screen.queryByText('Mocked SideBar')).not.toBeInTheDocument(); 
      });
  });
import React from 'react';
import { render, screen, cleanup, waitFor } from '@testing-library/react';
import { act } from 'react-dom/test-utils';  
import Home from '../home/index';  
import { QueryClient, QueryClientProvider } from 'react-query';

jest.mock('../navBar/index', () => () => <div>NavBar</div>);
jest.mock('../main', () => () => <div>Main</div>);

describe('Home Component', () => {
  const queryClient = new QueryClient();

  const renderHome = () =>
    render(
      <QueryClientProvider client={queryClient}>
        <Home />
      </QueryClientProvider>
    );

  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    cleanup();
    jest.clearAllTimers();
  });

  test('mostrar inicialmente a tela de carregamento', () => {
    renderHome();
    expect(screen.getByText(/Carregando\.\.\./i)).toBeInTheDocument();
  });

  test('mostrar a UI principal após o carregamento', async () => {
    renderHome();

    act(() => {
      jest.advanceTimersByTime(4000);  // Advance time by 4000ms
    });

    await waitFor(() => expect(screen.queryByText(/Carregando\.\.\./i)).toBeNull());

    expect(screen.getByText('NavBar')).toBeInTheDocument();
    expect(screen.getByText('Main')).toBeInTheDocument();
    expect(screen.getByTestId('home')).toBeInTheDocument();
  });
});

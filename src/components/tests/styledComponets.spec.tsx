import React from 'react';
import { render } from '@testing-library/react';
import 'jest-styled-components'; 
import '@testing-library/jest-dom'


import { Container, Navbar, BoxTitle } from '../../styles/StyledComponent';

describe('Componentes Estilizados', () => {
    it('Container deve renderizar corretamente', () => {
        const { container } = render(<Container />);
        expect(container.firstChild).toHaveStyleRule('width', '100vw');
        expect(container.firstChild).toHaveStyleRule('background-color', 'white');
    });

    it('Navbar deve ter o estilo correto', () => {
        const { getByTestId } = render(<Navbar data-testid="navbar" />);
        const navbar = getByTestId('navbar');
        expect(navbar).toHaveStyleRule('height', '101px');
        expect(navbar).toHaveStyleRule('background-color', '#0F52BA');
    });

    it('BoxTitle deve exibir conteúdo corretamente', () => {
        const { getByText } = render(<BoxTitle><div>Test Title</div></BoxTitle>);
        expect(getByText('Test Title')).toBeInTheDocument();
    });
});

"use client"
import React, { useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import Itens from '../itens';
import Image from 'next/image';
import SideBar from '@/components/sideBar/index';
import {
  Container, Navbar, BoxTitle, BoxCart, TitleUpperCase, Title, IconCart, NumberCart,
  ConatinerMain, BoxMain, Footer, ContainerCart,
} from '@/styles/StyledComponent';
import Vector from '../../../public/Vector.png';

const queryClient = new QueryClient();

const Home = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <QueryClientProvider client={queryClient}>
      <Container data-testid="home">
        <Navbar>
          <BoxTitle>
            <TitleUpperCase>MKS</TitleUpperCase>
            <Title>Sistemas</Title>
          </BoxTitle>
          <BoxCart onClick={() => setOpen(true)}>
            <IconCart>
              <Image src={Vector} alt='icon de carrinho' width={24} height={24} />
            </IconCart>
            <NumberCart>0</NumberCart>
          </BoxCart>
        </Navbar>

        {open && (
          <ContainerCart>
            <SideBar setOpen={setOpen} />
          </ContainerCart>
        )}

        <ConatinerMain>
          <BoxMain>
            <Itens />
          </BoxMain>
        </ConatinerMain>

        <Footer>
          MKS sistemas © Todos os direitos reservados
        </Footer>
      </Container>
    </QueryClientProvider>
  );
}

export default Home;

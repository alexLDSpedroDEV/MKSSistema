"use client"

import React from 'react'
import { 
  Container, Navbar, BoxTitle, BoxCart, TitleUpperCase, Title,IconCart, NumberCart,
  ConatinerMain, BoxItens

 } from '@/styles/StyledComponent';
import { QueryClient, QueryClientProvider } from 'react-query';
import Itens from '../itens';
import Vector from '../../../public/Vector.png'
import Image from 'next/image';


const queryClient = new QueryClient();


const Home = () => {
  return (
    <QueryClientProvider client={queryClient}>

      <Container  data-testid="home">
        <Navbar>
          <BoxTitle>
            <TitleUpperCase>MKS</TitleUpperCase>
            <Title>Sistemas</Title>
          </BoxTitle>
          <BoxCart>
            <IconCart>
              <Image src={Vector}  alt='icon de carrinho'></Image>
            </IconCart>
            <NumberCart>
              0
            </NumberCart>
          </BoxCart>
        </Navbar>
        <ConatinerMain>
          <BoxItens>
            <Itens/>
          </BoxItens>
        </ConatinerMain>
      </Container >
    </QueryClientProvider>
  )
}

export default Home;
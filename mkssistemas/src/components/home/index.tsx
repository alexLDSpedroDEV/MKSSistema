"use client"

import React, { useState, useEffect } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import Itens from '../itens';
import Image from 'next/image';
import SideBar from '@/components/sideBar/index';
import { motion } from 'framer-motion';
import {
  Container, Navbar, BoxTitle, BoxCart, TitleUpperCase, Title, IconCart, NumberCart,
  ConatinerMain, BoxMain, Footer, ContainerCart,
} from '@/styles/StyledComponent';
import Vector from '../../../public/Vector.png';

const queryClient = new QueryClient();

const Home = () => {
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <motion.div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          backgroundColor: '#0F52BA'
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="triangle"  
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{
            repeat: Infinity,
            duration: 2,
            ease: "linear"
          }}
          style={{
            width: '100px',
            height: '100px', 
            position: 'relative',
            top: '-50px', 
            backgroundColor: "#0F52BA"
          }}
        />
        <motion.div style={{color: "white", fontSize: "1.5em"}}
        >Carregando.... </motion.div>
      </motion.div>
    );
  }

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

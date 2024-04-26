"use client"

import React, { useState, useEffect } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import Itens from '../itens';
import SideBar from '@/components/sideBar/index';

import { motion } from 'framer-motion';
import {
  Container, Navbar, BoxTitle, BoxCart, TitleUpperCase, Title, IconCart, NumberCart,
  ConatinerMain, BoxMain, Footer, ContainerCart,
} from '@/styles/StyledComponent';

import { CarrinhoProdutos } from '../carrinho';
import { IoCart } from "react-icons/io5";

const queryClient = new QueryClient();

const Home = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [cartIndex, setCartIndex] = useState<number>(0);

  useEffect(() => {

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4000);



    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const currentProductsCount = CarrinhoProdutos.getAllProducts().length;
      setCartIndex(currentProductsCount);
    }, 1000);

    return () => clearInterval(interval);
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
        <motion.div style={{ color: "white", fontSize: "1.5em" }}
        ><div>Carregando....</div> </motion.div>
      </motion.div>
    );
  }
 

  return (
    <QueryClientProvider client={queryClient}>
      <Container data-testid="home" >
        <Navbar>
          <BoxTitle>
            <TitleUpperCase>MKS</TitleUpperCase>
            <Title>Sistemas</Title>
          </BoxTitle>
          <BoxCart onClick={() => setOpen(true)}>
            <IconCart>
              <IoCart />
            </IconCart>
            <NumberCart>{cartIndex}</NumberCart>
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

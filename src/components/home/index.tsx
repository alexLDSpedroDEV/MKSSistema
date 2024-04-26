"use client"

import React, { useState, useEffect } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { motion } from 'framer-motion';
import {
  Container, Footer,
} from '@/styles/StyledComponent';
import NavBar from '../navBar/index';
import Main from '../main';


const queryClient = new QueryClient();

const Home = () => {

  const [isLoading, setIsLoading] = useState<boolean>(true);

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
          data-testid="loadingTriangle"
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
        <NavBar />

        <Main />
        
        <Footer>
          MKS sistemas © Todos os direitos reservados
        </Footer>
      </Container>
    </QueryClientProvider>
  );
}

export default Home;

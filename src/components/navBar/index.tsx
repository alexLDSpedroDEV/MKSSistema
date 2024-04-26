import React, { useState, useEffect } from 'react';
import {
    Navbar, BoxTitle, BoxCart, TitleUpperCase, Title, IconCart, NumberCart, ContainerCart

} from '@/styles/StyledComponent';
import { IoCart } from "react-icons/io5";
import SideBar from '@/components/sideBar/index';
import { CarrinhoProdutos } from '../carrinho';

const navBar = () => {


    const [open, setOpen] = useState<boolean>(false);
    const [cartIndex, setCartIndex] = useState<number>(0);
    

    useEffect(() => {
        const interval = setInterval(() => {
          const currentProductsCount = CarrinhoProdutos.getAllProducts().length;
          setCartIndex(currentProductsCount);
        }, 1000);
    
        return () => clearInterval(interval);
      }, []);


    return (

        <section>

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


        </section>
    )
}

export default navBar
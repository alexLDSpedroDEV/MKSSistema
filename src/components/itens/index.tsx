"use client"
import React from 'react'
import { useQuery } from 'react-query';
import axios from 'axios';
import Image from 'next/image';
import { BsCart3 } from "react-icons/bs";
import Swal from 'sweetalert2';
import { CarrinhoProdutos } from '@/components/carrinho/index';
import { motion } from 'framer-motion';


import { 
    BoxItens,ConatinerItens, ItensPhoto, ItensBoxTitle,
    ItensBrand, ItensName, BoxItensPrice,
    ItensDescpition, BoxItensBtn, ItensBtnText

} from '@/styles/StyledComponent';

interface Produtos {
    id: number;
    name: string;
    brand: string;
    description: string;
    price: number;
    photo: string
}



const getItems = async (): Promise<Produtos[]> => {
    const response = await axios.get('https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=10&sortBy=name&orderBy=DESC');
    return response.data.products; 
}




const Itens = () =>  {

    const { data, error, isLoading, isError } = useQuery<Produtos[], Error>('dadosProdutos', getItems);

    if (isLoading) return <div>Carregando ...</div>
    
    if (isError) return <div>Erro: {error.message}</div>;
  
    const enviarPedido = (props: any) => {
        CarrinhoProdutos.addNewProduct(props)
        Swal.fire({
            title: 'Produto Adicionado ao Carrinho',
            text: 'O produto foi adicionado ao carrinho com sucesso!',
            icon: 'success',
            confirmButtonText: 'OK'
        });
    }


    return (
      <ConatinerItens>
        {data && data.map((product) => (
          <BoxItens key={product.id}>
            <ItensPhoto>
                <Image src={product.photo} width={111} height={138} priority  alt={product.name}></Image>
            </ItensPhoto>
            
            <ItensBoxTitle>
                <div>
                    <ItensBrand>{product.brand}</ItensBrand>
                    <ItensName>{product.name}</ItensName>
                </div>
                
                <BoxItensPrice>R${Math.floor(product.price)}</BoxItensPrice>
            </ItensBoxTitle>
            <ItensDescpition>{product.description}</ItensDescpition>
            <BoxItensBtn  onClick={() => enviarPedido(product)}>
                <BsCart3 style={{color: 'white'}}/>
                <ItensBtnText>COMPRAR</ItensBtnText>
            </BoxItensBtn>
            
            
          </BoxItens>
        ))}
      </ConatinerItens>
    );
  
}

export default Itens
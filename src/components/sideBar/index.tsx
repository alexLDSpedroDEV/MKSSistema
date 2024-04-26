import React, { useEffect, useState } from 'react'
import { IoMdClose } from "react-icons/io";
import {
    BoxCartTitle, CartBtnClose, CartTitle, BoxCartProducts, BoxCartProductsPhoto,
    CartProductsBtnClose, CartProductsTitles, CartProductsBtnQnt, CartProductsBtnMore,
    CartProductsPrice,ContainerCartProducts,BoxCartValue, BoxCartFinish, 
} from '@/styles/StyledComponent';

import Swal from 'sweetalert2';
import Image from 'next/image';
import { CarrinhoProdutos } from '@/components/carrinho/index';

interface SideBarProps {
    setOpen: (open: boolean) => void;  
}

const Index: React.FC<SideBarProps> = ({ setOpen }) => {
    const [produtos, setProdutos] = useState(CarrinhoProdutos.getAllProducts());
    const [quantidades, setQuantidades] = useState<number[]>(Array(produtos.length).fill(1));

    useEffect(() => {
        setProdutos(CarrinhoProdutos.getAllProducts());
        setQuantidades(Array(produtos.length).fill(1));  
    }, [produtos.length]);

    const incrementarQuantidade = (index: number) => {
        const newQuantidades = [...quantidades];
        newQuantidades[index] += 1;
        setQuantidades(newQuantidades);
    };

    const decrementarQuantidade = (index: number) => {
        const newQuantidades = [...quantidades];
        if (newQuantidades[index] > 1) {
            newQuantidades[index] -= 1;
            setQuantidades(newQuantidades);
        }
    };

    const calcularTotal = () => {
        return produtos.reduce((total, produto, idx) => total + produto.price * quantidades[idx], 0);
    };

    const finalizarCompra = () => {
        CarrinhoProdutos.clearAllProducts();
        setProdutos([]);
        setQuantidades([]);
        setOpen(false);  
        Swal.fire({
            title: 'Compra finalizada com sucesso',
            text: 'Obrigado por comprar, volte sempre!',
            icon: 'success',
            confirmButtonText: 'OK'
        });
    };

    const deleteItem = (IDproduct: number) => {
        CarrinhoProdutos.deleteOneProduct(IDproduct);
        const updatedProducts = CarrinhoProdutos.getAllProducts();
        setProdutos(updatedProducts);
        setQuantidades(updatedProducts.map(() => 1)); 
    };

    return (
        <div>

            <BoxCartTitle>
                <CartTitle>Carrinho de compras</CartTitle>
                <CartBtnClose onClick={() => setOpen(false)}>
                    <IoMdClose />
                </CartBtnClose>
            </BoxCartTitle>

            <ContainerCartProducts>
                {produtos.map((product, index) => (
                    <BoxCartProducts key={product.id}>
                        <BoxCartProductsPhoto>
                            <Image src={product.photo} alt={product.name} width={56} height={57} />
                        </BoxCartProductsPhoto>
                        <CartProductsTitles>
                            <p>{product.brand}</p>
                            <p>{product.name}</p>
                        </CartProductsTitles>
                        <div>
                            <CartProductsBtnQnt>Qtd:</CartProductsBtnQnt>
                            <CartProductsBtnMore>
                                <div style={{ cursor: 'pointer' }} onClick={() => decrementarQuantidade(index)}>-</div>
                                <div>{quantidades[index]}</div>
                                <div style={{ cursor: 'pointer' }} onClick={() => incrementarQuantidade(index)}>+</div>
                            </CartProductsBtnMore>
                        </div>
                        <CartProductsPrice>R${Math.floor(product.price)}</CartProductsPrice>
                        <CartProductsBtnClose onClick={() => deleteItem(product.id)}>
                            <IoMdClose />
                        </CartProductsBtnClose>
                    </BoxCartProducts>
                ))}
            </ContainerCartProducts>

            <BoxCartValue>
                <h2>Total</h2>
                <p>R${calcularTotal()}</p>
            </BoxCartValue>
            <BoxCartFinish onClick={finalizarCompra}>
                Finalizar Compra
            </BoxCartFinish>
            
        </div>
    );
};

export default Index;

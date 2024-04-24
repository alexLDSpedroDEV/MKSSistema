import React, { useEffect, useState } from 'react'
import { dados } from '../carrinho'
import { IoMdClose } from "react-icons/io";
import {
    BoxCartTitle, CartBtnClose, CartTitle, BoxCartProducts, BoxCartProductsPhoto,
    CartProductsBtnClose, CartProductsTitles, CartProductsBtnQnt, CartProductsBtnMore,
    CartProductsPrice,ContainerCartProducts,BoxCartValue, BoxCartFinish

} from '@/styles/StyledComponent';
import Swal from 'sweetalert2';
import Image from 'next/image';
import { CarrinhoProdutos } from '@/components/carrinho/index';

interface SideBarProps {
    setOpen: (open: boolean) => void;  
}

const index: React.FC<SideBarProps> = ({ setOpen }) => {

    const [quantidades, setQuantidades] = useState<number[]>(Array(dados.length).fill(1));
    const [produtos, setProdutos] = useState(CarrinhoProdutos.getAllProduct());

    useEffect(() => {
        setProdutos(CarrinhoProdutos.getAllProduct());
    }, []);

    const incrementarQuantidade = (index: number) => {
        const newQuantidades = [...quantidades];
        newQuantidades[index] += 1;
        setQuantidades(newQuantidades);
    }

    const decrementarQuantidade = (index: number) => {
        const newQuantidades = [...quantidades];
        if (newQuantidades[index] > 1) {
            newQuantidades[index] -= 1;
            setQuantidades(newQuantidades);
        }
    }

    const calcularTotal = () => {
        return dados.reduce((total, produto, idx) => total + produto.price * quantidades[idx], 0);
    }
    
    const finalizarCompra = () => {
        CarrinhoProdutos.ClearAllProducts();
        setProdutos([]);
        setQuantidades([]);
        Swal.fire({
            title: 'Compra finalizada com sucesso',
            text: 'Obrigado por comprar, volte sempre!',
            icon: 'success',
            confirmButtonText: 'OK'
        });
    };

    const deleteItem = (IDproduct: number) => {
        CarrinhoProdutos.deleteOneProduct(IDproduct);
        setProdutos(CarrinhoProdutos.getAllProduct());
        setQuantidades(produtos.map(() => 1)); // Redefine as quantidades
    };

    return (
        <div>

            <BoxCartTitle>
                <CartTitle>Carrinho de comprar</CartTitle>
                <CartBtnClose onClick={() => setOpen(false)}>
                    <IoMdClose />
                </CartBtnClose>

            </BoxCartTitle>
            <ContainerCartProducts>
                {dados.map((products: any, index: number) => (
                    <BoxCartProducts>
                        <BoxCartProductsPhoto>
                            <Image src={products.photo} alt={products.name} width={56} height={57} />
                        </BoxCartProductsPhoto>
                        <CartProductsTitles>
                            <p>{products.brand}</p>
                            <p>{products.name}</p>
                        </CartProductsTitles>

                        <div>
                            <CartProductsBtnQnt>Qtd:</CartProductsBtnQnt>
                            <CartProductsBtnMore>
                                <div style={{ cursor: 'pointer' }} onClick={() => decrementarQuantidade(index)}>-</div>
                                <div>{quantidades[index]}</div>
                                <div style={{ cursor: 'pointer' }} onClick={() => incrementarQuantidade(index)}>+</div>
                            </CartProductsBtnMore>
                        </div>

                        <CartProductsPrice>R${Math.floor(products.price)}</CartProductsPrice>

                        <CartProductsBtnClose onClick={() => deleteItem(products.id)}>
                            <IoMdClose />
                        </CartProductsBtnClose>
                    </BoxCartProducts>
                ))}
            </ContainerCartProducts>

            <BoxCartValue>
                <h2>Total</h2>
                <p>R${calcularTotal()}</p>
            </BoxCartValue>

            <BoxCartFinish onClick={() => finalizarCompra() }>
                Finalizar Compra
            </BoxCartFinish>
        </div>

    )
}

export default index
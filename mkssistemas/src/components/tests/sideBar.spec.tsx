import { CarrinhoProdutos, MyProducts, Products } from '@/components/carrinho/index';

describe('Classe Products', () => {
    let produtos: Products;
    const produtoExemplo: MyProducts = {
        id: 1,
        name: 'Produto Teste',
        brand: 'Marca Teste',
        description: 'Descrição Teste',
        price: 100,
        photo: 'url-da-imagem'
    };

    beforeEach(() => {
        produtos = new Products();  
    });

    test('deve adicionar um novo produto se não existir no carrinho', () => {
        produtos.addNewProduct(produtoExemplo);
        expect(produtos.getAllProducts()).toContain(produtoExemplo);
    });

    test('não deve adicionar um produto duplicado', () => {
        produtos.addNewProduct(produtoExemplo);
        produtos.addNewProduct(produtoExemplo); 
        expect(produtos.getAllProducts().length).toBe(1); 
    });

    test('deve retornar todos os produtos', () => {
        produtos.addNewProduct(produtoExemplo);
        const outroProduto = { ...produtoExemplo, id: 2, name: 'Outro Produto' };
        produtos.addNewProduct(outroProduto);
        expect(produtos.getAllProducts()).toEqual(expect.arrayContaining([produtoExemplo, outroProduto]));
    });

    test('deve limpar todos os produtos', () => {
        produtos.addNewProduct(produtoExemplo);
        produtos.clearAllProducts();
        expect(produtos.getAllProducts()).toEqual([]);
    });

    test('deve deletar um produto pelo ID', () => {
        produtos.addNewProduct(produtoExemplo);
        const outroProduto = { ...produtoExemplo, id: 2, name: 'Outro Produto' };
        produtos.addNewProduct(outroProduto);
        produtos.deleteOneProduct(1);
        expect(produtos.getAllProducts()).toEqual([outroProduto]);
    });

    test('não deve fazer nada se o ID para deletar não existir', () => {
        produtos.addNewProduct(produtoExemplo);
        produtos.deleteOneProduct(999); 
        expect(produtos.getAllProducts()).toEqual([produtoExemplo]);
    });
});

export interface MyProducts {
    id: number;
    name: string;
    brand: string;
    description: string;
    price: number;
    photo: string;
}

export class Products {
    private products: MyProducts[] = []; 

    public addNewProduct(product: MyProducts): void {

        const productExists = this.products.some(existingProduct => existingProduct.id === product.id);
        if (!productExists) {
            this.products.push(product);
        } else {
            console.log("Produto já existe no carrinho.");
        }
        
    }

    public getAllProducts(): MyProducts[] {
        return this.products;
    }

    public clearAllProducts(): void {
        this.products = [];
    }

    public deleteOneProduct(productId: number): void {
        const index = this.products.findIndex(product => product.id === productId);
        if (index !== -1) {
            this.products.splice(index, 1);
        }
    }
}

export const CarrinhoProdutos = new Products();
export const dados: MyProducts[] = CarrinhoProdutos.getAllProducts();

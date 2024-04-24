export interface MeuProdcts {
    id: number;
    name: string;
    brand: string;
    description: string;
    price: number;
    photo: string
}


export class Prodocts {
    private prodocts: MeuProdcts[] = [] ; 
    private anotherState: any;

    
    public addNewProduct(prodocts: MeuProdcts): void {
        this.prodocts.push(prodocts);
    }

    public getAllProduct(): MeuProdcts[] {
        return this.prodocts;
    }

    private init() {
        this.prodocts = [];
        this.anotherState = null; 
    }
    
    public ClearAllProducts(): void {
        this.init();
    }

    public deleteOneProduct(productId: number): void {
        const index = this.prodocts.findIndex(product => product.id === productId);
        console.log("entrou")
        if (index !== -1) {
            this.prodocts.splice(index, 1);
        }
    }
    
    
}

export const CarrinhoProdutos = new Prodocts();

export const dados: MeuProdcts[] = CarrinhoProdutos.getAllProduct();

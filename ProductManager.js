class ProductManager {
    constructor() {
        this.products = []
    }

    addProduct = (title, description, price, code, thumbnail, stock) => {
        const product = {
            title,
            description,
            price,
            code,
            thumbnail,
            stock
        }

        if (title && description && price && code && thumbnail && stock) {
            if (!this.getProductByCode(code)) {
                if (this.products.length === 0) {
                    product.id = 1
                }
                else {
                    product.id = this.products[this.products.length - 1].id + 1
                }

                this.products.push(product)
            }
            else {
                console.log(`Error adding product ${title}. Code already exists.`)
                return
            }
        }

        else {
            console.log('Error adding product. Title, description, price, code, thumbnail and stock are mandatory fields')
            return
        }
    }

    getAllProducts = () => {
        return this.products
    }

    getProductByCode = (productCode) => {
        const productIndex = this.products.findIndex(e => e.code === productCode)

        if (productIndex === -1) {
            console.log("Not found")
            return
        }
        
        return this.products[productIndex]
    }

    getProductById = (productId) => {
        const prodIndex = this.products.findIndex(e => e.id === productId)
        if (prodIndex=== -1 ) {
            console.log('Product not found!')
            return
            
        }
    }

    deleteAllProducts = () => {
        this.products = []
    }
}

//TEST CASES
//Instance create
const listaDeProductos = new ProductManager()


//Populte list
listaDeProductos.addProduct('Camara', 'Camara Samsung', '500', '13','samsung-1.jpg', 10)
listaDeProductos.addProduct('PS5', 'Playstation 5', '400', '15', 'ps5-1.jpg', 20)
listaDeProductos.addProduct('TV 55"', 'Samsung TV', '200', '15', 'tv-1.jpg', 30)

//Test getAllProducts and getProductByCode methods
console.log('Testing getAllProducts and getProductByCode')
console.log(listaDeProductos.getAllProducts())
console.log('Testing getProductById')
console.log(listaDeProductos.getProductById(2))

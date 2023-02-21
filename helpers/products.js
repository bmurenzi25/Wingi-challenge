export async function getAllProducts() {

    const products = JSON.parse(localStorage.getItem('products'));
  
    return products
}

export async function deleteProduct(id) {
    const products = await getAllProducts()
    const updatedProducts = products.filter((product) => product.id !== id)

    localStorage.setItem('products', JSON.stringify(updatedProducts));
}

export async function updateProduct(id, product) {

}

export async function createProduct(product) {
    const products = await getAllProducts() || []

    console.log(products);

    const updatedProducts = [...products, product]

    localStorage.setItem('products', JSON.stringify(updatedProducts))
}

export async function filterByCategory(category) {
    const products = await getAllProducts()

    return products.filter(product => product.category === category)
}


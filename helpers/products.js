export async function getAllProducts() {
    const result = await fetch(`https://dummyjson.com/products`)
    const data = await result.json()
  
    return data
}

export async function deleteProduct(id) {

}

export async function updateProduct(id, product) {

}


// function that returns all the available inventories
export function getInventories() {
    const inventries = JSON.parse(localStorage.getItem('inventories'));

    return inventries
}

// function that creates a new inventory
export function createInventory(inventory) {
    const inventories = getInventories() || []

    const id = inventory.id + generateRandomNumber(100, 500)
    const newInventory = {
        ...inventory,
        id
    }
    const updatedInventories = [...inventories, newInventory]

    localStorage.setItem('inventories', JSON.stringify(updatedInventories))
}

// update inventory of a product (inputs: productID and Quantity)
export function updateInventory(id, quantity) {
    console.log(id)
    const inventories = getInventories() || []
    const inv = getInventory(id)
    if (inv) {
        const i = inventories.findIndex(inventory => inventory.id);

        inventories[i].quantity = quantity;
        localStorage.setItem('inventories', JSON.stringify(inventories))
    }
}

// function that returns an intentory for a product
export function getInventory(productId) {
    const inventries = getInventories() || []

    const inv = inventries.find(inventory => inventory.product_id === productId)
    return inv;
}

function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

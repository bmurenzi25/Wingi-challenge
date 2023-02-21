import Button from "../elements/Button"

const ProductsTable = ({ products }) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>name</th>
                    <th>Description</th>
                    <th>Category</th>
                    <th>Price</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {products.map((product) => (
                    <tr key={product.id}>
                        <td>{product.name}</td>
                        <td>{product.description}</td>
                        <td>{product.category}</td>
                        <td>{product.price}</td>
                        <td>
                            <Button type='edit'>Edit</Button>
                            <Button type='delete'>Delete</Button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default ProductsTable
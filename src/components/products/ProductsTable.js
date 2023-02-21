import Button from "../elements/Button"
import Link from 'next/link';

const ProductsTable = ({ products, onDeleteProduct }) => {

    const handleDelete = (product) => {
        onDeleteProduct(product)
    }
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
                    <tr key={product?.id}>
                        <td>{product?.name && product.name}</td>
                        <td>{product?.description && product.description}</td>
                        <td>{product?.category && product.category}</td>
                        <td>{product?.price && product.price}</td>
                        <td>
                            <Button type='edit'>Edit</Button>
                            <Button type='delete' onClick={() => handleDelete(product)}>Delete</Button>
                            <Link href={`/products/${product.id}`}>
                                <Button>Manage Inventory</Button>
                            </Link>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default ProductsTable
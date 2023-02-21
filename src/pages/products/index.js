import Header from '@/components/elements/Header';
import Input from '@/components/elements/Input'
import { useEffect, useState } from 'react'
import styles from '@/styles/Home.module.css'
import Navbar from '@/components/elements/Navbar';
import { createProduct, deleteProduct, getAllProducts } from 'helpers/products';
import ProductsTable from '@/components/products/ProductsTable';
import Spinner from '@/components/elements/Spinner';
import Button from '@/components/elements/Button';
import ProductForm from '@/components/products/ProductForm';

const Products = () => {
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  let [showNewProductForm, setShowNewProductForm] = useState(false)


  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getAllProducts();
      setItems(data)
      setIsLoading(false)
    }
    fetchProducts()
  }, [items])

  const handleCreateProduct = (product) => {
    createProduct(product)
  }
  const handleDeleteProduct = (product) => {
    deleteProduct(product.id)
  }

  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className={styles.description}>
          <Navbar />
        </div>
        <div className='search-section'>
          <Button type='add' className='text-center' onClick={() => setShowNewProductForm(!showNewProductForm)}>Add new Product</Button>
        </div>
      </main>
      <div className={styles.container}>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          {showNewProductForm && <ProductForm onCreateProduct={handleCreateProduct} />}
          {items && <ProductsTable products={items} onDeleteProduct={handleDeleteProduct} />}
        </>
      )}
      </div>
    </>
  )
}

export default Products
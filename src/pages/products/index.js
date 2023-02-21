import Header from '@/components/elements/Header';
import Input from '@/components/elements/Input'
import { useEffect, useState } from 'react'
import styles from '@/styles/Home.module.css'
import Navbar from '@/components/elements/Navbar';
import { createProduct, getAllProducts } from 'helpers/products';
import ProductsTable from '@/components/products/ProductsTable';
import Spinner from '@/components/elements/Spinner';
import Button from '@/components/elements/Button';
import ProductForm from '@/components/products/ProductForm';

const Products = () => {
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  let [showForm, setShowForm] = useState(false)


  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getAllProducts();
      setItems(data)
      setIsLoading(false)
    }
    fetchProducts()
  }, [])

  const handleCreateProduct = (product) => {
    createProduct(product)
  }

  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className={styles.description}>
          <Navbar />
        </div>
        <div className='search-section'>
          <Button type='add' className='text-center' onClick={() => setShowForm(!showForm)}>Add new Product</Button>
        </div>
      </main>
      <div className={styles.container}>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          {showForm && <ProductForm onCreateProduct={handleCreateProduct} />}
          {items && <ProductsTable products={items} />}
        </>
      )}
      </div>
    </>
  )
}

export default Products
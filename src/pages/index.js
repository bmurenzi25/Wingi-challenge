import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import { getAllProducts } from 'helpers/products'
import { useEffect, useState } from 'react'
import ProductGrid from '@/components/products/ProductGrid'
import Search from '@/components/elements/Search'
import Header from '@/components/elements/Header'
import Navbar from '@/components/elements/Navbar'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [query, setQuery] = useState('')

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getAllProducts();
      setItems(data)
      setIsLoading(false)
    }
    fetchProducts()
  }, [query])
  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className={styles.description}>
          <Navbar />
        </div>
        <div className='search-section'>
          <Search getQuery={(q) => setQuery(q)} />
        </div>
      </main>
      <div className={styles.container}>
        {
          items && <ProductGrid isLoading={isLoading} items={items} /> 
        }
      </div>
    </>
  )
}
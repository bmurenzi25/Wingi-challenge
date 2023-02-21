import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import { filterByCategory, getAllProducts } from 'helpers/products'
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
  const [category, setCategory] = useState('')

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getAllProducts();
      if (category) {
        const filtered = data.filter(product => product.category == category)
        setItems(filtered)
      } else if (query)
      {
        const products = data.filter(product => product.name.toLowerCase().includes(query.toLowerCase()))
        setItems(products)
      }
      else {
        setItems(data)
      }
      setIsLoading(false)
    }
    fetchProducts()
  }, [items])
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
        <select
          id="category"
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        >
          <option value="">Filter By category</option>
          <option value="electronics">Electronics</option>
          <option value="clothing">Clothing</option>
          <option value="home">Home</option>
        </select>
        {
          items && <ProductGrid isLoading={isLoading} items={items} />
        }
      </div>
    </>
  )
}
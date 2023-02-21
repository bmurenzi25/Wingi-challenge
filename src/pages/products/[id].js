import Header from '@/components/elements/Header';
import { useRouter } from 'next/router';
import styles from '@/styles/Home.module.css'
import Navbar from '@/components/elements/Navbar';
import Button from '@/components/elements/Button';
import { useEffect, useState } from 'react';
import Spinner from '@/components/elements/Spinner';
import ProductInventoryForm from '@/components/products/ProductinventoryForm';
import { createInventory, getInventory, updateInventory } from 'helpers/inventory';

function Product() {
    const [isLoading, setIsLoading] = useState(true)
    let [q, setQ] = useState(0)

    const router = useRouter();
    const { id } = router.query;

    useEffect(() => {
        const fetchInventory = async () => {
            const inv = await getInventory(id)
            setQ(inv?.quantity)
            setIsLoading(false)
          }
          fetchInventory()
    }, [q])
    
    // create a new inventory or update an existing one
    const handleCreateInventory = (inventory) => {
        if (q) 
        {
            updateInventory(id, inventory.quantity)
        } else{
            createInventory(inventory)
        }
        setQ(inventory.quantity)
    }
    return (
        <>
            <Header />
            <main className={styles.main}>
                <div className={styles.description}>
                    <Navbar />
                </div>
                <div className='search-section'>
                    <h3>Current Quantity: {q}</h3>
                </div>
            </main>
            <div className={styles.container}>
                {
                    <ProductInventoryForm onCreateInventory={handleCreateInventory} productId={id} />
                }
            </div>
        </>
    );
}

export default Product;
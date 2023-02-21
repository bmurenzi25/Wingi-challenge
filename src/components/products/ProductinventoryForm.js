import { useState, useEffect } from 'react'
import styles from '@/styles/Home.module.css'
import Button from '../elements/Button'
import Input from '../elements/Input'

export default function ProductInventoryForm({ onCreateInventory,  productId }) {
  // Set up state for form field
  const [quantity, setQuantity] = useState('')

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault()
    const i_details = {
      id: Date.now(),
      product_id: productId,
      quantity
    }

    onCreateInventory(i_details)

    setQuantity('')
  }

  return (
    <div className='form-wrapper'>
      <form onSubmit={handleSubmit}>
        <div>
          <Input
            type="number"
            name="Quantity in Stock"
            id="name"
            value={quantity}
            onChange={(event) => setQuantity(event.target.value)}
          />
        </div>
        <Button type='add'>Save</Button>
      </form>
    </div>
  )
}
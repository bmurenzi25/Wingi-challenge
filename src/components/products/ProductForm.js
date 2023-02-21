import { useState, useEffect } from 'react'
import styles from '@/styles/Home.module.css'
import Button from '../elements/Button'

export default function ProductForm({ product }) {
  // Set up state for form fields
  const [name, setName] = useState('')
  const [image, setImage] = useState('')
  const [description, setDescription] = useState('')
  const [category, setCategory] = useState('')
  const [price, setPrice] = useState('')

  useEffect(() => {
    if (product) {
      setName(product.name)
      setImage(product.image)
      setDescription(product.description)
      setCategory(product.category)
      setPrice(product.price)
    }
  }, [product])

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault()
    // Do something with form data, for example, submit it to an API
  }

  return (
    <div className='form-wrapper'>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div>
          <label htmlFor="image">Image URL:</label>
          <input
            type="text"
            id="image"
            value={image}
            onChange={(event) => setImage(event.target.value)}
          />
        </div>
        <div>
          <label htmlFor="image">Price:</label>
          <input
            type="text"
            id="image"
            value={price}
            onChange={(event) => setImage(event.target.value)}
          />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />
        </div>
        <div>
          <label htmlFor="category">Category:</label>
          <select
            id="category"
            value={category}
            onChange={(event) => setCategory(event.target.value)}
          >
            <option value="">Select a category</option>
            <option value="electronics">Electronics</option>
            <option value="clothing">Clothing</option>
            <option value="home">Home</option>
          </select>
        </div>
        <Button type={product ? 'edit' : 'add'}>Save</Button>
      </form>
    </div>
  )
}
import { useState, useEffect } from 'react'
import styles from '@/styles/Home.module.css'
import Button from '../elements/Button'
import Input from '../elements/Input'

export default function ProductForm({ onCreateProduct }) {
  // Set up state for form fields
  const [name, setName] = useState('')
  const [image, setImage] = useState('')
  const [description, setDescription] = useState('')
  const [category, setCategory] = useState('')
  const [price, setPrice] = useState('')

  // useEffect(() => {
  //   if (product) {
  //     setName(product.name)
  //     setImage(product.image)
  //     setDescription(product.description)
  //     setCategory(product.category)
  //     setPrice(product.price)
  //   }
  // }, [])

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault()
    const p_details = {
      id: Date.now(),
      name,
      image,
      description,
      category,
      price
    }

    onCreateProduct(p_details)

    setName('')
    setImage('')
    setCategory('')
    setDescription('')
    setPrice('')
  }

  return (
    <div className='form-wrapper'>
      <form onSubmit={handleSubmit}>
        <div>
          <Input
            type="text"
            name="Name:"
            id="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div>
          <Input
            type="text"
            name="image"
            id="image"
            value={image}
            onChange={(event) => setImage(event.target.value)}
          />
        </div>
        <div>
          <Input
            type="text"
            name="Price:"
            id="price"
            value={price}
            onChange={(event) => setPrice(event.target.value)}
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
        <Button type='add'>Save</Button>
      </form>
    </div>
  )
}
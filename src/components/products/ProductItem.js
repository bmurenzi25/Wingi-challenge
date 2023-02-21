import Image from "next/image"
import ProductGrid from "./ProductGrid"
import styles from '@/styles/Home.module.css'

const ProductItem = ({ product }) => {2
    console.log(product);
  return (
    <div className='card'>
      <div className='card-inner'>
        <div className='card-front'>
          <img src="https://img.freepik.com/free-photo/elegant-smartphone-composition_23-2149437106.jpg" />
        </div>
        <div className='card-back'>
          <h1>Iphone X</h1>
          <ul>
            <li>
              <strong>Apple Ip</strong>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default ProductItem
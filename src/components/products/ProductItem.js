const ProductItem = ({ product }) => {
  return (
    <div className='card'>
      <div className='card-inner'>
        <div className='card-front'>
          <img src={product.image} />
        </div>
        <div className='card-back'>
          <h1>{product.name && product.name}</h1>
          <ul>
            <li>
              <h4>Category: {product.category && product.description}</h4>
              <p>{product.description && product.description}</p>
              <h4>${product.price && product.price}</h4>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default ProductItem
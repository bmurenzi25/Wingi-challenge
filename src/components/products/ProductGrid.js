import React from 'react';
import Spinner from '../elements/Spinner';
import ProductItem from './ProductItem';

const ProductGrid = ({ items, isLoading }) => {
  return (
    <section className='cards'>
      {isLoading ? (
        <Spinner />
      ) : (
        items.map(item => <ProductItem key={item.id} item={item} />)
      )}
    </section>
  );
};

export default ProductGrid;

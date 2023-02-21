import React from 'react';
import Spinner from '../elements/Spinner';
import ProductItem from './ProductItem';

const ProductGrid = ({ items, isLoading }) => {
  return (
    <section className='cards'>
      {isLoading ? (
        <Spinner />
      ) : (
        items && items.map(item => <ProductItem key={item.id} product={item} />)
      )}
    </section>
  );
};

export default ProductGrid;

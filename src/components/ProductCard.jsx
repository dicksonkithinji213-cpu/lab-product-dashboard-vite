
import React from 'react';
import styles from '../styles/ProductCard.module.css';

const ProductCard = ({ product, onRemove }) => {
  return (
    <div
      className={`${styles.card} ${
        !product.inStock
          ? `${styles.outOfStock} outOfStockClass`
          : ''
      }`}
    >
      <h2>{product.name}</h2>

      <p>Price: ${product.price}</p>

      <p>
        {product.inStock ? 'In Stock' : 'Out of Stock'}
      </p>

      {onRemove && (
        <button onClick={() => onRemove(product.id)}>
          Remove
        </button>
      )}
    </div>
  );
};

export default ProductCard;

import React from 'react';
import styles from '../styles/ProductItem.module.css';

export default function ProductItem({ data, addToCart }) {
    return (
        <div className='styles.container_product'>
            <h2>{data.name}</h2>
            <p>${data.price}</p>
            <button className={styles.btnProduct} onClick={() => addToCart(data.id)}>Agregar al carrito</button>
        </div>
    )
}
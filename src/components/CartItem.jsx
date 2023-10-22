import React from 'react'
import styles from '../styles/CartItem.module.css'

export default function CartItem ({data, deleteFromCart}) {
  return (
    <div className='styles.container_productCart'>
        <h2>{data.name}</h2>
        <p>${data.price}</p>
        <button className={styles.btnProductCart} onClick={() => deleteFromCart(data.id)}>Eliminar del carrito</button>
    </div>
  )
}
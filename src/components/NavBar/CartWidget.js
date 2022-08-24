import React from 'react'
import cart from './cart.png'
import styles from './NavBarStyles'
import { Link } from "react-router-dom"

function CartWidget() {
  return (
    <Link style={styles.cartwidget} to={'/carrito'}>
      <img className='carrito' src={cart} alt="CartWidget" style={styles.cartwidget} />
    </Link>
  )
}

export default CartWidget
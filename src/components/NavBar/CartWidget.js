import React from 'react'
import cart from '../../assets/cart.png'
import styles from './styles'
import { Link } from 'react-router-dom'

const CartWidget = () => {
  return (
    <Link style={styles.cartwidget} to={'/carrito'}>
      <img className='cart' src={cart} alt='CartWidget' style={styles.cartwidget} />
    </Link>
  )
}

export default CartWidget
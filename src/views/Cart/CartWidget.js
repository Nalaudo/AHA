import React from 'react'
import cart from '../../assets/cart.png'
import { Link } from 'react-router-dom'
import { useCartContext } from '../../context/CartContext'

const styles = {
  link: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    margin: 'auto 210px 5px auto',
  },
  cartwidget: {
    width: '50px',
    height: '50px'
  },
  cantidadItem: {
    margin: '0px',
    textAlign: 'center'
  },
}


const CartWidget = () => {
  const { cantidadItem } = useCartContext()
  return (
    <Link style={styles.link} to={'/cart'}>
      <h4 style={styles.cantidadItem}>{cantidadItem() !== 0 && cantidadItem()}</h4>
      <img className='cart' src={cart} alt='CartWidget' style={styles.cartwidget} />
    </Link>
  )
}

export default CartWidget
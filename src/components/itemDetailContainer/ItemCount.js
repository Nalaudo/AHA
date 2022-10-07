import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Button from '@mui/material/Button';

const styles = {
  div: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  h2: {
    margin: '10px 0px'
  },
  h3: {
    margin: '0px'
  },
  button: {
    margin: '0px 2px',
    height: '24px',
    width: '20px'
  },
  addToCart: {
    margin: '10px 5px 0px 0px',
    height: '70px',
    width: '150px'
  },
  finishBuying: {
    margin: '10px 0px 0px 5px',
    height: '70px',
    width: '150px'
  },
}

const Counter = ({ initial, stock, onAdd }) => {
  const [count, setCount] = useState(initial)
  const handlerIncreaseInitial = (event) => {
    if (count < stock) {
      setCount(count + 1)
    }
    else {
      event.stopPropagation();
    }
  }
  const handlerDecreaseInitial = (event) => {
    if (count > 1) {
      setCount(count - 1)
    }
    else {
      event.stopPropagation();
    }
  }
  const [clicked, setClicked] = useState(false)

  const CounterStructure = () => {
    return (
      <React.Fragment>
        <h2 style={styles.h2}>Cuanto desea comprar:</h2>
        <div style={styles.div}>
          <h3 style={styles.h3}>{count}</h3>
          <div>
            <Button variant='contained' style={styles.button} onClick={handlerIncreaseInitial}>+</Button>
            <Button variant='contained' style={styles.button} onClick={handlerDecreaseInitial}>-</Button>
          </div>
          <h3 style={styles.h3}>Stock disponible:{stock}</h3>
        </div>
      </React.Fragment>
    )
  }
  return (
    <div>
      {clicked ?
        <React.Fragment>
          <Link to={'/'}>
            <Button variant='contained' style={styles.finishBuying}>Seguir comprando</Button>
          </Link>
          <Link to={'/cart'}>
            <Button variant='contained' style={styles.finishBuying}>Terminar compra</Button>
          </Link>
        </React.Fragment>
        :
        <React.Fragment>
          <CounterStructure />
          <Button variant='contained' style={styles.addToCart} onClick={() => { onAdd(count); setClicked(true) }}>Agregar al carrito</Button>
          <Link to={'/cart'}>
            <Button variant='contained' style={styles.finishBuying} onClick={() => onAdd(count)}>Comprar ahora</Button>
          </Link>
        </React.Fragment>
      }

    </div>
  )
}

export default Counter;
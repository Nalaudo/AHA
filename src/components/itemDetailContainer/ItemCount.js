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

const Counter = ({ stock }) => {
  const [onAdd, setOnAdd] = useState()

  const handlerOnAdd = (event) => {
    setOnAdd(initial)
    event.stopPropagation();
  }

  const [initial, setInitial] = useState(1)
  if (stock === 0) {
    setInitial(0)
  }
  const handlerIncreaseInitial = (event) => {
    if (initial < stock) {
      setInitial(initial + 1)
    }
    else {
      event.stopPropagation();
    }
  }
  const handlerDecreaseInitial = (event) => {
    if (initial > 1) {
      setInitial(initial - 1)
    }
    else {
      event.stopPropagation();
    }
  }

  const CounterStructure = () => {
    return (
      <React.Fragment>
        <h2 style={styles.h2}>Cuanto desea comprar:</h2>
        <div style={styles.div}>
          <h3 style={styles.h3}>{initial}</h3>
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
      {onAdd === initial ? null : <CounterStructure />}
      <Button variant='contained' style={styles.addToCart} onClick={handlerOnAdd}>Agregar al carrito</Button>
      <Link to={'/carrito'}>
        <Button variant='contained' style={styles.finishBuying}>Terminar compra</Button>
      </Link>
    </div>
  )
}

export default Counter;
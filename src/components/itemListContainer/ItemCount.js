import React, { useState, useEffect } from 'react'

const Counter = () => {

  //Contador de stock
  const [counter, setCounter] = useState(0)
  const handlerIncreaseCounter = (event) => {
    setCounter(counter + 1)
  }
  const handlerDecreaseCounter = (event) => {
    if (counter > 0) {
      setCounter(counter - 1)
    }
    else {
      event.stopPropagation();
    }
  }

  //Contador de cuantos quiere el usuario
  const [initial, setInitial] = useState(1)
  const handlerIncreaseInitial = (event) => {
    if (initial < counter) {
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

  useEffect(() => {
    console.log(counter, initial)
  }, [counter, initial])

  return (
    <div>
      <h2>Stock:{counter}</h2>
      <button onClick={handlerIncreaseCounter}>Incrementar</button>
      <button onClick={handlerDecreaseCounter}>Decrementar</button>
      <h2>Cuanto desea comprar:</h2>
      <h2>{initial}</h2>
      <button onClick={handlerIncreaseInitial}>+</button>
      <button onClick={handlerDecreaseInitial}>-</button>

    </div>
  )
}

export default Counter;
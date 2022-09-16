import React, { createContext, useState, useContext } from "react"

export const CartContext = createContext([])

export const useCartContext = () => {
    return useContext(CartContext)
}

const CartContextProvider = ({ children }) => {
    const [cartList, setCartList] = useState([])

    const agregarCarrito = (item) => {
        const index = cartList.findIndex(i => i.id === item.id) // posición -1   
        if (index > -1) {
            const oldQty = cartList[index].quantity
            cartList.splice(index, 1)
            setCartList([...cartList, { ...item, quantity: item.quantity + oldQty }])
        }
        else {
            setCartList([...cartList, { ...item, quantity: item.quantity }])
        }
    }

    const eliminarItem = (id) => {
        setCartList(cartList.filter((item) => item.id !== id))
    }

    const limpiarCarro = () => {
        setCartList([])
    }

    const cantidadItem = () => {
        return cartList.reduce((acum, prod) => acum = acum + prod.quantity, 0)
    }

    const sumaPrecioItems = () => {
        return cartList.reduce((acum, valor) => (acum + (valor.quantity * valor.price)), 0)
    }

    return (
        <CartContext.Provider value={{
            cartList,
            agregarCarrito,
            limpiarCarro,
            eliminarItem,
            cantidadItem,
            sumaPrecioItems
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider
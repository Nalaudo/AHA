import React, { useState } from 'react'
import { useCartContext } from '../../context/CartContext'
import { collection, addDoc } from 'firebase/firestore'
import { Timestamp } from 'firebase/firestore'
import { db } from '../../firebase/config'
import Form from './Form'
import { Alert, Button } from '@mui/material';
import { Link } from "react-router-dom";

const styles = {
    div: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    div1: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        marginTop: "20px",
    },
    div2: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        marginTop: "20px",
    },
    link: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
    },
    button: {
        margin: "5px",
    },
};

const Checkout = () => {
    const [orderID, setOrderID] = useState('')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [emailValid, setEmailValid] = useState('')
    const [phone, setPhone] = useState('')
    const { cartList, sumaPrecioItems } = useCartContext()

    const generateOrder = async (e) => {
        e.preventDefault()

        const buyOrder = {}
        buyOrder.buyer = { name, email, phone }
        buyOrder.total = sumaPrecioItems()
        buyOrder.items = cartList.map(cartItem => {
            const id = cartItem.id
            const title = cartItem.title
            const price = cartItem.price
            const quantity = cartItem.quantity
            const total = cartItem.price * cartItem.quantity
            const date = Timestamp.now()
            return { id, title, quantity, price, total, date }
        })

        const docRef = await addDoc(collection(db, 'purchases'), {
            buyOrder
        });
        setOrderID(docRef.id);
        setName('')
        setEmail('')
        setEmailValid('')
        setPhone('')
    }

    const notValid =
        !(name.length &&
            email.length &&
            phone.length &&
            emailValid.length > 0 &&
            email === emailValid
        )

    return (
        <React.Fragment>
            {!cartList.length > 0 ? (
                <div style={styles.div1}>
                    <div style={styles.div2}>
                        <h2>¡Aún no has añadido nada en el carrito!</h2>
                        <Link style={styles.link} to={"/productos"}>
                            <Button style={styles.button} variant="contained">
                                ¡Añade artículos ahora!
                            </Button>
                        </Link>
                    </div>
                </div>
            ) : (
                <div style={styles.div}>
                    <div style={styles.div2}>
                        <div>
                            <h2>Completa tus datos</h2>
                            <p>Para poder confirmar la compra, ingresa tus datos:</p>
                            <Form
                                generateOrder={generateOrder}
                                name={name}
                                setName={setName}
                                email={email}
                                setEmail={setEmail}
                                emailValid={emailValid}
                                setEmailValid={setEmailValid}
                                phone={phone}
                                setPhone={setPhone}
                                notValid={notValid}
                            />
                        </div>
                        {orderID && <Alert severity="success">Gracias por tu compra! Tu código de referencia es: {orderID}</Alert>}
                    </div>
                </div>
            )}
        </React.Fragment>
    )
}
export default Checkout
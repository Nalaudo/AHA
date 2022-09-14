import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { useParams } from 'react-router';
import Counter from './ItemCount';
import { CartContext } from '../../context/CartContext';

const styles = {
    section: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    div: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'left',
        margin: '20px'
    },
    img: {
        maxHeight: '400px'
    },
    p: {
        textAlign: 'left',
        inlineSize: '250px',
        overflowWrap: 'break-word',
        fontSize: '20px'
    },
}

const ItemDetail = () => {

    const { agregarCarrito } = useContext(CartContext)

    const [product, setProduct] = useState([])

    let { id } = useParams()

    useEffect(() => {
        axios(
            `https://my-json-server.typicode.com/Nalaudo/JSONserver/products/${id}`
        ).then((res) => setProduct(res.data));
    }, [id])

    const handlerOnAdd = (quantity) => {
        agregarCarrito({ ...product, quantity: quantity })
    }

    const NoStock = () => {
        return (
            <h2>Lo sentimos, pero no hay stock por el momento :(</h2>
        )
    }

    return (
        <section style={styles.section}>
            <div style={styles.div}>
                <div>
                    <img style={styles.img} src={product.pictureUrl} alt={product.title + " img"} />
                </div>
            </div>
            <div style={styles.div}>
                <div>
                    <h2>{product.title}</h2>
                </div>
                <div>
                    <h2>${product.price}</h2>
                </div>
                <div>
                    <p style={styles.p}>{product.features}</p>
                </div>
                <div>
                    {product.stock === 0 ? <NoStock /> : <Counter initial={1} onAdd={handlerOnAdd} stock={product.stock} />}
                </div>
            </div>
        </section>
    )
}

export default ItemDetail
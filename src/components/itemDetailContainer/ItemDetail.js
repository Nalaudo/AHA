import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import Counter from './ItemCount';
import { useCartContext } from '../../context/CartContext';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../firebase/config';

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
    const { agregarCarrito } = useCartContext()

    const [product, setProduct] = useState([])
    const { id } = useParams()

    const getProduct = async () => {
        const docRef = doc(db, "products", id);
        const docSnap = await getDoc(docRef);
        setProduct(docSnap.data());
    }

    useEffect(() => {
        getProduct()
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
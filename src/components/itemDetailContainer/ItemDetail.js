import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import Counter from './ItemCount';
import { useCartContext } from '../../context/CartContext';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../firebase/config';
import { Typography, CardMedia, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import Loading from '../Loading/Loading';

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
        inlineSize: '300px',
        overflowWrap: 'break-word',
        fontSize: '20px'
    },
    separate: {
        margin: '13px 0px'
    },
    div1: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        margin: "30vh 0px"
    },
    div2: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
    },
}

const ItemDetail = () => {
    const { agregarCarrito } = useCartContext()

    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(true)
    const { id } = useParams()

    const getProduct = async () => {
        const docRef = doc(db, "products", id);
        const docSnap = await getDoc(docRef);
        setProduct(docSnap.data());
    }

    useEffect(() => {
        getProduct().then(() => {
            setLoading(false)
        })
    }, [id])

    const handlerOnAdd = (quantity) => {
        agregarCarrito({ ...product, quantity: quantity })
    }

    const NoStock = () => {
        return (
            <Typography variant="h5" gutterBottom>
                Lo sentimos, pero no hay stock por el momento :(
            </Typography>
        )
    }

    const NoProduct = () => {
        return (
            <div style={styles.div1}>
                <div style={styles.div2}>
                    <h2>Error 404</h2>
                    <h3>Página no encontrada</h3>
                    <Link to={"/"}>
                        <Button variant="contained">
                            ¡Añade artículos ahora!
                        </Button>
                    </Link>
                </div>
            </div>
        )
    }

    return (
        <section style={styles.section}>
            {loading ? (<Loading />) : (
                <React.Fragment>
                    {product ? (
                        <React.Fragment>
                            <div style={styles.div}>
                                <CardMedia
                                    component='img'
                                    alt={product.title + " img"}
                                    height="500"
                                    image={product.pictureUrl}
                                />
                            </div>
                            <div style={styles.div}>
                                <div style={styles.separate}>
                                    <Typography variant="h3" gutterBottom>
                                        {product.title}
                                    </Typography>
                                </div>
                                <div style={styles.separate}>
                                    <Typography variant="h4" gutterBottom>
                                        ${product.price}
                                    </Typography>
                                </div>
                                <div style={styles.separate}>
                                    <Typography style={styles.p} variant="body1" gutterBottom>
                                        {product.features}
                                    </Typography>
                                </div>
                                <div style={styles.separate}>
                                    {product.stock === 0 ? <NoStock /> : <Counter initial={1} onAdd={handlerOnAdd} stock={product.stock} />}
                                </div>
                            </div>
                        </React.Fragment>

                    ) : (
                        <NoProduct />
                    )}
                </React.Fragment>
            )}

        </section>
    )
}

export default ItemDetail
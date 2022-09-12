import React, { useState, useEffect } from 'react';
import Item from './Item';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Loading from '../Loading/Loading';

const styles = {
    div: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: '20px'
    },
}

const ItemList = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            axios(
                'https://my-json-server.typicode.com/Nalaudo/JSONserver/products'
            ).then((res) => setProducts(res.data));
            setLoading(false)
        }, 2000);

    }, [])

    return (
        <div style={styles.div}>
            {loading ? <Loading /> : null}
            {products.map((product) => {
                return (
                    <Link to={`/productos/${product.id}`}>
                        <div>
                            <Item key={product.id} product={product} />
                        </div>
                    </Link>
                )
            })}
        </div>
    )
}

export default ItemList;
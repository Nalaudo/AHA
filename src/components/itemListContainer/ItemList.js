import React, { useState, useEffect } from 'react';
import Item from './Item';
import axios from 'axios';
import { Link } from 'react-router-dom';

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

    useEffect(() => {
        setTimeout(() => {
            axios(
                'https://my-json-server.typicode.com/Nalaudo/JSONserver/products'
            ).then((res) => setProducts(res.data));
        }, 2000);
    }, [])

    return (
        <div style={styles.div}>
            {products.map((product) => {
                return (
                <Link to={`/productos/${product.id}`}>
                    <div key={product.id}>
                        <Item product={product} />
                    </div>
                </Link>
                )
            })}
        </div>
    )
}

export default ItemList;
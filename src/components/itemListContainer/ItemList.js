import React, { useState, useEffect } from 'react';
import Item from './Item';
import Loading from '../Loading/Loading';
import { collection, query, getDocs } from 'firebase/firestore';
import { db } from '../../firebase/config';

const styles = {
    div: {
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: '20px'
    },
    link: {
        display: 'inline-block',
        width: '32px',
        height: '32px',
    },
}

const ItemList = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true)

    const getProducts = async () => {
        const q = query(
            collection(db, 'products')
        );
        const docs = [];
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            docs.push({ ...doc.data(), id: doc.id });
        });
        setProducts(docs);
    };

    useEffect(() => {
        getProducts();
        setTimeout(() => {
            setLoading(false)
        }, 1000);
    }, []);

    return (
        <div style={styles.div}>
            {loading ? <Loading /> : null}
            {products.map((product) => {
                return (
                    <Item key={product.id} product={product} />
                )
            })}
        </div>
    )
}

export default ItemList;
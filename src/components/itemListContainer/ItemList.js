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
        margin: '20px 0px'
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
        getProducts().then(() => {
            setLoading(false)
        })
    }, []);

    return (
        <div style={styles.div}>
            {loading ? (<Loading />) : (
                <React.Fragment>
                    {products.map((product) => {
                        return (
                            <Item key={product.id} product={product} />
                        )
                    })
                    }
                </React.Fragment>
            )}

        </div>
    )
}

export default ItemList;
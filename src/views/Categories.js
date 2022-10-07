import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { db } from '../firebase/config';
import { collection, query, getDocs, where } from 'firebase/firestore';
import Item from '../components/itemListContainer/Item';
import Loading from '../components/Loading/Loading';

const styles = {
    div: {
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'center',
        margin: '20px 0px'
    },
}

const Categories = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true)
    const { category } = useParams();

    const getAlbums = async () => {
        const q = query(collection(db, 'products'), where('category', '==', category));
        const docs = [];
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            docs.push({ ...doc.data(), id: doc.id });
        });
        setProducts(docs);
    };

    useEffect(() => {
        getAlbums().then(() => {
            setLoading(false)
        })
    }, [category]);

    return (
        <div style={styles.div}>
            {loading ? (<Loading />) : (
                <React.Fragment>
                    {products.map((product) => {
                        return (
                            <Item key={product.id} product={product} />
                        )
                    })}
                </React.Fragment>
            )}
        </div>
    )
}

export default Categories;

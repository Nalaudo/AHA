import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { db } from '../../firebase/config';
import { collection, query, getDocs, where } from 'firebase/firestore';
import Item from '../../components/itemListContainer/Item';
import { Link } from 'react-router-dom';

const styles = {
    div: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: '20px'
    },
}

const Categories = () => {
    const [products, setProducts] = useState([]);
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
        getAlbums();
    }, [category]);

    return (
        <div style={styles.div}>
            {products.map((product) => {
                return (
                    <Link key={product.id} to={`/productos/${product.id}`}>
                        <div>
                            <Item product={product} />
                        </div>
                    </Link>
                )
            })}
        </div>
    )
}

export default Categories;

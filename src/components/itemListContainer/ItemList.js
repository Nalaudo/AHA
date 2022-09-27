import React, { useState, useEffect } from 'react';
import Item from './Item';
import { Link } from 'react-router-dom';
import Loading from '../Loading/Loading';
import { collection, query, getDocs, where } from 'firebase/firestore';
import { db } from '../../firebase/config';

const styles = {
    div: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: '20px'
    },
}

const ItemList = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true)

	const getProducts = async () => {
		const q = query(
			collection(db, 'products'), where('category', '==', 'hogar') //usando el where, los amigurumis no aparecen, solo los de categoría hogar
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

export default ItemList;
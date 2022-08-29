import React, { useState, useEffect } from "react";
import Item from "./Item";

const styles = {
    div: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        marginTop: "20px"
    },
}

const ItemList = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('https://my-json-server.typicode.com/Nalaudo/JSONserver/products')
            .then((resp) => resp.json())
            .then((json) => setProducts(json))
    }, [])

    return (
        <div style={styles.div}>
            {products.map((product) => {
                return <Item key={product.id} data={product} />
            })}
        </div>
    )
}

export default ItemList;
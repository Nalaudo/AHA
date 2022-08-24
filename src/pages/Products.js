import React from 'react';
import Counter from '../components/paraDesafios/ItemCount';

const styles = {
    main: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
    },
}

const Productos = () => {
    return (
        <main style={styles.main}>
            <Counter />
        </main>
    )
}

export default Productos;

import React from 'react';
import Banquito from '../components/itemListContainer/banquito/Banquito';
import styles from '../styles';

const Productos = () => {
    return(
        <main style={styles.productosmain}>
            <div style={styles.productosdiv}>
                <h2 style={styles.productostitle}>PRODUCTOS</h2>
            </div>
            <div style={styles.productosdiv}>
                <Banquito
                nombre="Banquito" 
                descripcion="Este banquito es un banquito con forma de banquito y no se que poner aca solo pruebo." 
                img='https://http2.mlstatic.com/D_NQ_NP_952504-MLA33006212090_112019-O.jpg'
                height={500}
                alt={"Banquito"}
                /> 
                <Banquito
                nombre="Banquito" 
                descripcion="Este banquito es un banquito con forma de banquito y no se que poner aca solo pruebo." 
                img='https://img.freepik.com/vector-gratis/avatares-personas-felices_52683-34515.jpg?w=2000'
                height={140}
                alt={"Banquito"}
                /> 
            </div>
            <div style={styles.productosdiv}>
                <Banquito
                nombre="Banquito" 
                descripcion="Este banquito es un banquito con forma de banquito y no se que poner aca solo pruebo." 
                img='https://img.freepik.com/vector-gratis/avatares-personas-felices_52683-34515.jpg?w=2000'
                height={140}
                alt={"Banquito"}
                /> 
                <Banquito
                nombre="Banquito" 
                descripcion="Este banquito es un banquito con forma de banquito y no se que poner aca solo pruebo." 
                img='https://img.freepik.com/vector-gratis/avatares-personas-felices_52683-34515.jpg?w=2000'
                height={140}
                alt={"Banquito"}
                /> 
            </div>
        </main>
    ) 
}

export default Productos;

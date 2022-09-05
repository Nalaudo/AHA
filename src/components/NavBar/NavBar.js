import React from "react";
import styles from "./styles";
import logo from '../../assets/logo.png';
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";

const NavBar = () => {
    return (
        <header style={styles.header}>
            <Link style={styles.linklogo} to={'/'}>
                <h1 style={styles.headinglogo}>
                    <img style={styles.headinglogo} src={logo} alt='Logo' />
                </h1>
            </Link>
            <div style={styles.div}>
                <Link to={'/'} className='bordernav' style={styles.iniciobtn}>Inicio</Link>
                <Link to={'/nosotros'} className='bordernav' style={styles.nosotrosbtn}>Nosotros</Link>
                <Link to={'/productos'} className='bordernav' style={styles.productosbtn}>Productos</Link>
                <Link to={'/contacto'} className='bordernav' style={styles.contactobtn}>Contacto</Link>
            </div>
            <CartWidget />
        </header>
    )
}

export default NavBar;

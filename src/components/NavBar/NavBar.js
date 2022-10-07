import React from "react";
import styles from "./styles";
import logo from '../../assets/logo.png';
import { Link } from "react-router-dom";
import CartWidget from '../../views/Cart/CartWidget';
import BasicMenu from './CategoriesDropdown';

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
                <Link to={'/about'} className='bordernav' style={styles.nosotrosbtn}>Nosotros</Link>
                <BasicMenu />
            </div>
            <CartWidget />
        </header>
    )
}

export default NavBar;

import React from "react";
import styles from "./NavBarStyles";
import logo from './logo.png';
import { Link } from "react-router-dom"
import { NavLink } from "react-router-dom"
import CartWidget from "./CartWidget";

const NavBar = () => {
    return (
        <React.Fragment>
            <div style={styles.div1}>
                <Link style={styles.linklogo} to={'/'}>
                    <h1 style={styles.headinglogo}>
                        <img style={styles.headinglogo} src={logo} alt='Logo' />
                    </h1>
                </Link>
                <nav style={styles.nav}>
                    <NavLink to={'/'} className='bordernav' style={styles.iniciobtn}>Inicio</NavLink>
                    <NavLink to={'/nosotros'} className='bordernav' style={styles.nosotrosbtn}>Nosotros</NavLink>
                    <NavLink to={'/productos'} className='bordernav' style={styles.productosbtn}>Productos</NavLink>
                    <NavLink to={'/contacto'} className='bordernav' style={styles.contactobtn}>Contacto</NavLink>
                </nav>
                <CartWidget />
            </div>
        </React.Fragment>
    )
}

export default NavBar;

import React from "react";
import styles from "./styles";
import logo from '../aha_logo.png';

const NavBar = () => {
    return (
        <React.Fragment>
            <div style={styles.div1}>
                <header style={styles.heading}>
                    <h1 style={styles.h1}><img style={styles.headinglogo} src={logo} alt="Logo" /></h1>
                </header>
                <nav style={styles.nav}>
                    <span style={styles.iniciobtn}>Inicio</span>
                    <span style={styles.productosbtn}>Prductos</span>
                    <span style={styles.contactobtn}>Contacto</span>
                </nav>  
            </div>
        </React.Fragment>
    )
}

export default NavBar;

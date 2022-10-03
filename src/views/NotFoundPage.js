import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

const styles = {
    link: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    },
    button: {
      margin: "5px",
    },
  };

const NotFoundPage = () => {
    return (
        <React.Fragment>
            <h2>Error 404</h2>
            <h3>Página no encontrada</h3>
            <Link style={styles.link} to={"/productos"}>
              <Button style={styles.button} variant="contained">
                ¡Añade artículos ahora!
              </Button>
            </Link>
        </React.Fragment>
    )
}

export default NotFoundPage;
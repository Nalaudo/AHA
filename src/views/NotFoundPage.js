import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

const styles = {
  div1: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    margin: "30vh 0px"
  },
  div2: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
};

const NotFoundPage = () => {
  return (
    <div style={styles.div1}>
      <div style={styles.div2}>
        <h2>Error 404</h2>
        <h3>Página no encontrada</h3>
        <Link to={"/"}>
          <Button variant="contained">
            ¡Añade artículos ahora!
          </Button>
        </Link>
      </div>
    </div>
  )
}

export default NotFoundPage;
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import styles from '../../../styles';

function Banquito({nombre, descripcion, img, height, alt}) {
    return (
      <Card style={styles.cardsgap} sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height={height}
            image={img}
            alt={alt}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {nombre}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {descripcion}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    );
  }

  export default Banquito;

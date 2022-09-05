import React from 'react';
import { Typography, Card, CardContent, CardMedia, CardActionArea } from '@mui/material';

const styles = {
    item: {
        margin: '5px'
    },
}

const Item = ({ product }) => {
    return (
        <Card style={styles.item} sx={{ maxWidth: 400 }}>
            <CardActionArea>
                <CardMedia
                    component='img'
                    alt={product.title + " img"}
                    height={product.height}
                    image={product.pictureUrl}
                />
                <CardContent>
                    <Typography gutterBottom variant='h5' component='div'>
                        {product.price}
                    </Typography>
                    <Typography gutterBottom variant='h6' component='div'>
                        {product.title}
                    </Typography>
                    <Typography gutterBottom variant='body2' component='div'>
                        {product.description}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}

export default Item;
import React from 'react';
import { Typography, Card, CardContent, CardMedia, CardActionArea } from '@mui/material';
import { Link } from 'react-router-dom';

const styles = {
    item: {
        margin: '5px'
    },
}

const Item = ({ product }) => {
    return (
        <div style={styles.item}>
            <Link style={{
                display: 'inline-block',
            }} to={`/product/${product.id}`}>
                <Card>
                    <CardActionArea>
                        <CardMedia
                            component='img'
                            alt={product.title + " img"}
                            height="500"
                            image={product.pictureUrl}
                        />
                        <CardContent>
                            <Typography gutterBottom variant='h5' component='div'>
                                ${product.price}
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
            </Link>
        </div>
    );
}

export default Item;
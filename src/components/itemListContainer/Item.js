import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Counter from './ItemCount';

const styles = {
    item: {
        margin: "5px"
    },
}

const Item = ({ data }) => {
    return (
        <Card style={styles.item} sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                alt="green iguana"
                height="200"
                image={data.pictureUrl}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {data.title}
                </Typography>
                <Typography gutterBottom variant="h6" component="div">
                    {data.price}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {data.description}
                </Typography>
                <Counter />
            </CardContent>
        </Card>
    );
}

export default Item;
import * as React from 'react';
import '../../App.css'

//MUI
import { CardActionArea, Card, CardContent, CardMedia, Typography } from '@mui/material';


const CardItem = ({ data }) => {
    return (
        <Card sx={{ maxWidth: 300, height: 500, backgroundColor: 'gray' }} className="zIndex divCardItem">
            <CardActionArea>
                <CardMedia
                    component="img"
                    image={data.img}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {data.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {data.status}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}

export default CardItem
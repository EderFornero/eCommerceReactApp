import * as React from 'react';
import '../../App.css'

//MUI
import { CardActionArea, Card, CardContent, CardMedia, Typography } from '@mui/material';


const CardItem = ({ data }) => {
    return (
        <Card sx={{ maxWidth: 300, height: 500, backgroundColor: '#ece4a4' }} className="zIndex divCardItem">
            <CardActionArea>
                <CardMedia
                    component="img"
                    image={data.img}
                    alt="Charging product"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {data.name}
                    </Typography>
                    <br/>
                    <Typography variant="body2" color="text.secondary">
                       Stock: {data.status}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                       {data.water_resistance ? `Water resistance: ${data.water_resistance}` : null}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}

export default CardItem
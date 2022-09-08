import * as React from 'react';
import '../../App.css'

//MUI
import { CardActionArea, Card, CardContent, CardMedia, Typography } from '@mui/material';


const CardItem = ({ data }) => {
    return (
        <Card sx={{ maxWidth: 300, height: 600 }} className="zIndex card-detail">
            <CardActionArea>
                <CardMedia
                    component="img"
                    image={data.img}
                    alt="green iguana"
                />
                <CardContent>
                    <p className="font-ty" >
                        Name: {data.name}
                    </p>
                    <p className="font-ty" >
                        Birthday: {data.birthday}
                    </p>
                    <p className="font-ty" >
                        Occupation: {data.occupation}
                    </p>
                    <p className="font-ty" >
                        Portrayed: {data.portrayed}
                    </p>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}

export default CardItem
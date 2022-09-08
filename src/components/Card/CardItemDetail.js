import * as React from 'react';
import '../../App.css'

//MUI
import { CardActionArea, Card, CardContent, CardMedia, Typography } from '@mui/material';

//COUNTER
import ItemCount from '../Counter/ItemCount'


const CardItem = ({ data }) => {
    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alingContent: 'center' }}>
                <Card sx={{ maxWidth: 300, backgroundColor: 'beige' }} className="zIndex card-detail">
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            image={data.img}
                            alt="green iguana"
                        />
                    </CardActionArea>
                </Card>
                <div className='div-properties'>
                    <Card sx={{ maxWidth: 300, border: 'solid 1px black', backgroundColor: 'gray' }} className="zIndex card-detail">
                        <CardContent>
                            <p className="font-ty" >
                                <h5 style={{ textDecoration: 'underline' }}>Name:</h5>{data.name}
                            </p>
                            <p className="font-ty" >
                                <h5 style={{ textDecoration: 'underline' }}>Birthday:</h5>{data.birthday}
                            </p>
                            <p className="font-ty" >
                                <h5 style={{ textDecoration: 'underline' }}>Occupation:</h5>{data.occupation}
                            </p>
                            <p className="font-ty" >
                                <h5 style={{ textDecoration: 'underline' }}>Portrayed:</h5>{data.portrayed}
                            </p>
                        </CardContent>
                    </Card>
                </div>

            </div>
            <ItemCount />
        </div>


    );
}

export default CardItem
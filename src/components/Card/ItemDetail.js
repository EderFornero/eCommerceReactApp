import React, { useState } from 'react';
import '../../App.css'

//MUI
import { CardActionArea, Card, CardContent, CardMedia, Typography } from '@mui/material';

//COUNTER
import ItemCount from '../Counter/ItemCount'
import { Link } from 'react-router-dom';

//Context
import { useCustomCartContext } from '../../context/CartContext';


const CardItem = ({ data }) => {

    //Logic add to cart

    const [goToCart, setGoToCart] = useState(false);

    const { addProduct } = useCustomCartContext();

    const onAdd = (quantity) => {
        setGoToCart(true);
        addProduct(data, quantity)
    }


    return (

        <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alingContent: 'center'
        }}>
            <div>
                <Card sx={{
                    maxWidth: 300,
                    backgroundColor: '#ece4a4',
                    height: 400
                }} className="zIndex card-detail">
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            image={data.img_back}
                            alt="green iguana"
                        />
                    </CardActionArea>

                </Card>
                {
                    goToCart ? <Link to="/cart" style={{ color: 'rgb(48, 190, 48)', textDecoration: 'none', fontFamily: 'Arial', fontSize: 'large' }}>CHECKOUT</Link> : <ItemCount initial={1} stock={8} onAdd={onAdd} />
                }
            </div>



            <div className='div-properties'>
                <Card sx={{
                    maxWidth: 300,
                    border: 'solid 1px black',
                    backgroundColor: '#ece4a4',
                    height: 400
                }} className="zIndex card-detail card mb-3">

                    <CardContent>
                        <Typography>
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
                        </Typography>
                    </CardContent>
                </Card>

            </div>

        </div>




    );
}

export default CardItem
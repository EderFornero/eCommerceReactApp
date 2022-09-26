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
                    backgroundColor: 'beige',
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
                {/* <div class="card mb-3" style={{maxWidth: '540px'}}>
                    <div class="row g-0">
                        <CardMedia class="col-md-4">
                            {data.img_back}
                        </CardMedia>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title">{data.name}</h5>
                                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                        </div>
                    </div>
                </div> */}
                <Card sx={{
                    maxWidth: 300,
                    border: 'solid 1px black',
                    backgroundColor: 'gray',
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
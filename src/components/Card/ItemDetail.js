import React, { useState } from 'react';
import '../../App.css'


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

        //     <div className='cartView'>

        //     <img className='cartViewImg' src={product.img} alt={product.portrayed}></img>

        //     <div className='cartViewDiv' style={{ marginTop: 15 }}>
        //         <p>
        //             <h5 style={{ textDecoration: 'underline', marginTop: 8 }}>Product:</h5> <h6>{product.name}</h6>
        //         </p>
        //         <p>
        //             <h5 style={{ textDecoration: 'underline', marginTop: 8 }}>Units:</h5> <h6>{product.quantity}</h6>
        //         </p>
        //         <p>
        //             <h5 style={{ textDecoration: 'underline', marginTop: 8 }}>Price:</h5> <h6>${product.price}</h6>
        //         </p>
        //         <p>
        //             <h5 style={{ textDecoration: 'underline', marginTop: 8 }}>Total:</h5> <h6>${product.quantity * product.price}</h6>
        //         </p>

        //         <br />
        //         <FontAwesomeIcon icon={faTrashCan} className='btn btn-danger mx-3' onClick={() => removeProductInCart(product.id)} />
        //     </div>


        // </div>

        <div className='cartView'>

            <img className='cartViewImg' src={data.img_back} alt={data.name}></img>


            <div className='cartViewDiv' style={{ marginTop: 15 }}>
                <p>
                    <h5 style={{ textDecoration: 'underline', marginTop: 8 }}>Product:</h5> <h6>{data.name}</h6>
                </p>
                <p>
                    <h5 style={{ textDecoration: 'underline', marginTop: 8 }}>For:</h5> <h6>{data.for}</h6>
                </p>
                <p>
                    <h5 style={{ textDecoration: 'underline', marginTop: 8 }}>Size:</h5> <h6>{data.size}</h6>
                </p>
                <p>
                    <h5 style={{ textDecoration: 'underline', marginTop: 8 }}>Made In:</h5> <h6>{data.made_in}</h6>
                </p>


                <div style={{marginTop: 15}}>
                    {
                        goToCart ? <Link to="/cart" style={{ color: '#dec92a', textDecoration: 'underline', fontFamily: 'Arial', fontSize: 'large' }}>CHECKOUT</Link> : <ItemCount initial={1} stock={8} onAdd={onAdd} />
                    }
                </div>
                

            </div>


        </div>




    );
}

export default CardItem
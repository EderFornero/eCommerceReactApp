import React from 'react'
import '../../App.css'
import { useCustomCartContext } from '../../context/CartContext'

function InCart({ product }) {
    const { removeProductInCart, totalPrice } = useCustomCartContext();
    return (
        <div className='cartView'>

            <img style={{ width: '300px', marginLeft: '300px', maxHeight: '20em'}} src={product.img} alt={product.portrayed}></img>

            <div style={{ marginLeft: '20px'}}>
                <p>
                    <h5 style={{ textDecoration: 'underline' }}>Product:</h5> <h6>{product.nickname}</h6>
                </p>
                <p>
                    <h5 style={{ textDecoration: 'underline' }}>Units:</h5> <h6>{product.quantity}</h6>
                </p>
                <p>
                    <h5 style={{ textDecoration: 'underline' }}>Price:</h5> <h6>10 {product.price}</h6>
                </p>
                <p>
                    <h5 style={{ textDecoration: 'underline' }}>Total:</h5> <h6>${product.quantity * product.price}</h6>
                </p>

                <br />

                <p style={{ fontSize: '2em' }}>Total to pay: ${(totalPrice())}</p>

                <br />

                <button onClick={() => removeProductInCart(product.id)} className='btn btn-danger mx-3'>Delete Product</button>
            </div>


        </div>
    )
}

export default InCart
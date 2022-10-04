import React from 'react'
//css
import '../../../../App.css'
//context
import { useCustomCartContext } from '../../../../context/CartContext'
//font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'



function InCart({ product }) {
    const { removeProductInCart } = useCustomCartContext();
    return (
        <div className='cartView'>

            <img className='cartViewImg' src={product.img} alt={product.name}></img>

            <div className='cartViewDiv' style={{ marginTop: 15 }}>
                <p>
                    <h5 style={{ textDecoration: 'underline', marginTop: 8 }}>Product:</h5> <h6>{product.name}</h6>
                </p>
                <p>
                    <h5 style={{ textDecoration: 'underline', marginTop: 8 }}>Units:</h5> <h6>{product.quantity}</h6>
                </p>
                <p>
                    <h5 style={{ textDecoration: 'underline', marginTop: 8 }}>Price:</h5> <h6>${product.price}</h6>
                </p>
                <p>
                    <h5 style={{ textDecoration: 'underline', marginTop: 8 }}>Total:</h5> <h6>${product.quantity * product.price}</h6>
                </p>

                <br />
                <FontAwesomeIcon icon={faTrashCan} className='btn btn-danger mx-3' onClick={() => removeProductInCart(product.id)} />
            </div>


        </div>
    )
}

export default InCart
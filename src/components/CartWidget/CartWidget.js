import React from 'react'
import '../../App.css'
//router
import { Link } from 'react-router-dom'
//context
import { useCustomCartContext } from '../../context/CartContext'

function IconCart() {

    const { totalProducts } = useCustomCartContext();

    return (
        <>
         <span>{totalProducts !== 0 ? totalProducts() : ''}</span>
        <Link to="/cart"><ion-icon className='move-cart' name="cart-outline"></ion-icon></Link>
        </>
    )
}

export default IconCart
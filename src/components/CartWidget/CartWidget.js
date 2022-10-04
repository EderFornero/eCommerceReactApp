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
        <Link to="/cart"><ion-icon name="cart-outline"></ion-icon></Link>
        <span>{totalProducts !== 0 ? totalProducts() : ''}</span>
        </>
    )
}

export default IconCart
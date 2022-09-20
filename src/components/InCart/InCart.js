import React from 'react'
import '../../App.css'
//context
import { useCustomCartContext } from '../../context/CartContext'
//router
import { Link } from 'react-router-dom'
//item
import ItemCart from '../ItemCart/ItemCart'



const InCart = () => {

    const { cart } = useCustomCartContext();

    if (cart.length === 0) {
        return (
            <div className='emptyCart'>
                <p>Cart is empty, <Link to="/" className='goShop'>GO SHOPPING</Link></p>
            </div>
        )
    }
    return (
        <div>
            {cart.map(product => <ItemCart key={product.id} product={product} />)}
        </div>
    )
}

export default InCart
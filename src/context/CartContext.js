import React, { useContext, useState } from 'react'


const CartContext = React.createContext([]);

export const useCustomCartContext = () => useContext(CartContext)



function CartProvider({ children }) {

    //work with cart

    const [cart, setCart] = useState([]);

    //add product to cart
    const addProduct = (item, quantity) => {
        let replaceCart;
        let product = cart.find(product => product.id === item.id)
        if (product) {
            product.quantity += quantity;
            replaceCart = [...cart]
        } else {
            replaceCart = [...cart, { ...item, quantity: quantity }]
        }
        setCart(replaceCart);
    }

    console.log('carrito :', cart);


    //clear cart
    const clearCart = () => setCart([]);

    //not duplicated
    const inCart = (id) => {
        return cart.find(product => product.id === id) ? true : false;
    }
    //remove cart
    const removeProductInCart = (id) => {
        return setCart(cart.filter(product => product.id !== id))
    }

    return (

        <CartContext.Provider value={{ clearCart, inCart, removeProductInCart, addProduct}}>
            {children}
        </CartContext.Provider>

    )
}

export default CartProvider
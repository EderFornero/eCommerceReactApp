import React, { useState } from 'react'
import '../../../../App.css'
//context
import { useCustomCartContext } from '../../../../context/CartContext'
//router
import { Link } from 'react-router-dom'
//item
import ItemCart from '../ItemCart/ItemCart'
// Firebase
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../../../firebase/cfg';
//MUI
import TextField from '@mui/material/TextField';
//font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRemove } from '@fortawesome/free-solid-svg-icons'


const initialState = {
    name: '',
    lastName: '',
    country: '',
    city: '',
}


const InCart = () => {

    const [values, setValues] = useState(initialState);



    const handleOnChange = (e) => {
        const { value, name } = e.target;
        setValues({ ...values, [name]: value });


    };

    const onSubmit = async (e) => {

        e.preventDefault();
        
        //add a new collection into firebase
        const docRef = await addDoc(collection(db, "buyers"),
        { values }); 
        console.log(docRef.id);
    }


    

    const { cart, totalPrice, clearCart } = useCustomCartContext();

    if (cart.length === 0) {
        return (
            <div className='emptyCart'>
                <p>Cart is empty, <Link to="/" className='goShop'>GO SHOPPING</Link></p>
            </div>
        )
    };
    return (
        <>
            <div>
                {cart.map(product => <ItemCart key={product.id} product={product} />)}
            </div>
            <div style={{ fontSize: '1.5em', display: 'flex', justifyContent: 'center', marginTop: 30 }}>
                <p>Total to pay: ${(totalPrice())}</p>
            </div>
            <div style={{ fontSize: '1.5em', display: 'flex', justifyContent: 'center' }} >
                <FontAwesomeIcon icon={faRemove} onClick={() => clearCart()} className='btn btn-danger mx-3'/>
            </div>



            <form className='formContainer' onSubmit={onSubmit}>

                <TextField className="textField"
                    style={{ margin: 10 }}
                    label="Name"
                    variant="filled"
                    name='name'
                    value={values.name}
                    onChange={handleOnChange}

                />

                <TextField className="textField"
                    style={{ margin: 10 }}
                    label="Last Name"
                    variant="filled"
                    name='lastName'
                    value={values.lastName}
                    onChange={handleOnChange}

                />

                <TextField className="textField"
                    style={{ margin: 10 }}
                    label="Country"
                    variant="filled"
                    name='country'
                    value={values.country}
                    onChange={handleOnChange}

                />
                <TextField className="textField"
                    style={{ margin: 10 }}
                    label="City"
                    variant="filled"
                    name='city'
                    value={values.city}
                    onChange={handleOnChange}

                />
                <button style={{color: 'black'}} className='btn btn-success mx-3' type='submit'>Buy</button>
            </form>

        </>
    )
}

export default InCart
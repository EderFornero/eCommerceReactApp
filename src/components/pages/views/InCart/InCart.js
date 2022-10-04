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
//toast
import { Toaster, toast } from 'react-hot-toast'
//message ID
import MessageID from '../../../MessageID/MessageID'

const initialState = {
    name: '',
    lastName: '',
    country: '',
    city: '',
    number: '',
    email: '',
}


const InCart = () => {

    const [values, setValues] = useState(initialState);
    const [purchaseId, setPurchaseId] = useState('');


    const handleOnChange = (e) => {
        const { value, name } = e.target;
        setValues({ ...values, [name]: value });


    };

    const onSubmit = async (e) => {

        e.preventDefault();

        //add a new collection into firebase
        const docRef = await addDoc(collection(db, "buyers"),
            { values });

        setPurchaseId(docRef.id);
        setValues(initialState);

    }




    const { cart, totalPrice, clearCart } = useCustomCartContext();

    if (cart.length === 0) {
        return (
            <div className='emptyCart'>
                <p>There aren't products in the cart, <Link to="/" className='goShop'>GO SHOPPING</Link></p>
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
                <FontAwesomeIcon icon={faRemove} onClick={() => clearCart()} className='btn btn-danger mx-3' />
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

                <TextField className="textField"
                    style={{ margin: 10 }}
                    id="filled-number"
                    label="Phone"
                    type="number"
                    name='number'
                    InputLabelProps={{
                        shrink: true,
                    }}
                    variant="filled"
                    value={values.number}
                    onChange={handleOnChange}
                />

                <TextField className="textField"
                    style={{ margin: 10 }}
                    label="Email"
                    name='email'
                    variant="filled"
                    value={values.email}
                    onChange={handleOnChange}
                />

                <button disabled=
                    {   values.city.length === 0 
                        ||
                        values.country.length === 0 
                        ||
                        values.email.length === 0 
                        ||
                        values.lastName.length === 0
                        ||
                        values.name.length === 0
                        ||
                        values.number.length === 0}
                    onClick={() => toast.success('Thanks! Your ID purchase shows below')} style={{ color: 'black', marginTop: '10px' }} className='btn btn-success mx-3' type='submit'>Buy</button>
                <Toaster />
            </form>
            {purchaseId && <MessageID purchaseId={purchaseId} />}

        </>
    )
}

export default InCart
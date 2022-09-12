import React, { useState } from 'react'
import '../../App.css'

//Mui
import { Button } from '@mui/material'

function ItemCount({ initial, stock, onAdd }) {
    const [counter, setCounter] = useState(initial);

    const addNumber = () => {
        setCounter(counter + 1)
    }
    const subtractCounter = () => {
        // counter > 1 ? setCounter(counter - 1) : null; 
        if (counter > 1) {
            setCounter(counter - 1)
        }
    }

    return (
        <>
            <div className='div-cart'>
                <div className='container my-5'>
                    <div className='text-center my-5'>
                        <div className='underline'><h4>Products In Cart</h4></div>
                        <div className='my-4'><h5>{counter}</h5></div>
                        <button disabled={counter >= stock} className='btn btn-success mx-3' onClick={addNumber}>ADD</button>
                        <button disabled={counter <= 1} className='btn btn-danger mx-3' onClick={subtractCounter}>SUBTRACT</button>
                        <Button disable={stock <= 0} onClick={() => onAdd(counter)} variant="contained" component="label">
                            Add to Cart
                        </Button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ItemCount
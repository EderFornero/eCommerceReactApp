import React, { useState } from 'react'
import '../../App.css'

function ItemCount() {
    const [counter, setCounter] = useState(1);

    const addNumber = () => {
        setCounter(counter + 1)
        if (counter > 4) { alert("¡Tu contador ha llegado a 5!") }
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
                        <button className='btn btn-success mx-3' onClick={addNumber}>ADD</button>
                        <button className='btn btn-danger mx-3' onClick={subtractCounter}>SUBTRACT</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ItemCount
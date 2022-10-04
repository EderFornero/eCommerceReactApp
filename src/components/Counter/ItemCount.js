import React, { useState } from 'react'
import '../../App.css'


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
            <div>
                <div>
                    <div className=" inline-flex  items-center">
                        <button  disabled={counter <= 1} onClick={subtractCounter} className="bg-white rounded-l border text-gray-600 hover:bg-gray-100 active:bg-gray-200 disabled:opacity-50 inline-flex items-center px-2 py-1 border-r border-gray-200">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-4"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M20 12H4"
                                />
                            </svg>
                        </button>
                        <div className="bg-gray-100 border-t border-b border-gray-100 text-gray-600 hover:bg-gray-100 inline-flex items-center px-4 py-1 select-none">
                            {counter}
                        </div>
                        <button disabled={counter >= stock} onClick={addNumber} className="bg-white rounded-r border text-gray-600 hover:bg-gray-100 active:bg-gray-200 disabled:opacity-50 inline-flex items-center px-2 py-1 border-r border-gray-200">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-4"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M12 4v16m8-8H4"
                                />
                            </svg>
                        </button>
                    </div>
                    <div className="mt-3">
                        <button className="inline-block px-6 py-2.5 bg-[#b3a224] text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-[#dec92a] hover:shadow-lg focus:bg-bg-[#6f5cef] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#dec92a] active:shadow-lg transition duration-150 ease-in-out" disable={stock <= 0} onClick={() => onAdd(counter)}>Add to Cart</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ItemCount
import React, { useState, useEffect } from 'react'
import axios from 'axios'


//ROUTER
import { Link } from 'react-router-dom'

//Components
import CardItem from '../Card/CardItem'
import '../../App.css'

function ItemListContainer() {

    const [users, setUsers] = useState([]);
   

    useEffect(() => {

        axios.get('https://api.escuelajs.co/api/v1/products')
            .then(res => setUsers(res.data))

    }, [])

    return (

        <div className="divCardItem" >

            {users.map((users) => {
                return (
                    <div key={users.id} >
                        <Link to={`/detail/${users.id}`} style={{ textDecoration: 'none' }}><CardItem data={users} /></Link>
                    </div>
                )
            })}
        </div>
    )
}

export default ItemListContainer
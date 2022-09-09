import React, { useState, useEffect } from 'react'
import axios from 'axios'

//ROUTER
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'

//Components
import CardItem from '../Card/CardItem'
import '../../App.css'

function ItemListContainer() {

    const [users, setUsers] = useState([]);
    const {status} = useParams();

    useEffect(() => {

        axios.get('https://breakingbadapi.com/api/characters')
            .then(res => setUsers(res.data))
           users.filter(users => users.status === status)
    }, [])

    return (

        <div className="divCardItem" >

            {users.map((users) => {
                return (
                    <div key={users.char_id} >
                        <Link to={`/detail/${users.char_id}`} style={{ textDecoration: 'none' }}><CardItem data={users} /></Link>
                    </div>
                )
            })}
        </div>
    )
}

export default ItemListContainer
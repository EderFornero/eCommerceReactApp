import React, { useState, useEffect } from 'react'

//firebase
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore'

//ROUTER
import { Link, useParams } from 'react-router-dom'

//Components
import Spinner from "../Spinner/Spinner"
import CardItem from '../Card/CardItem'
import '../../App.css'

function ItemListContainer() {

    const [users, setUsers] = useState([]);
    const { categoryId } = useParams();
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        const getStore = getFirestore();
        const selectCollection = collection(getStore, 'products');
        if (categoryId) {
            const category = query(selectCollection, where('category', '==', categoryId))
            getDocs(category)
                .then(res => setUsers(res.docs.map(products => ({ id: products.id, ...products.data() }))))
        } else {
            getDocs(selectCollection)
                .then(res => setUsers(res.docs.map(products => ({ id: products.id, ...products.data() }))))
        }

    }, [categoryId])

    setTimeout(() => {
        setIsLoading(false)
    }, 1000)

    return (

        <div className="divCardItem" >
            {isLoading ? <Spinner style={{display: 'flex', justifyContent: 'center'}}/> :
                users.map((users) => {
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
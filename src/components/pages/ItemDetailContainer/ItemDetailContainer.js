import React, { useState, useEffect } from 'react'
import axios from 'axios'
import '../../../App.css'

//React router dom
import { useParams } from 'react-router'


//Card
import ItemDetail from '../../Card/ItemDetail'





function ItemDetailContainer() {

  const [user, setUser] = useState({})
  console.log(user)
  let { id } = useParams();



  useEffect(() => {

    axios(`https://api.escuelajs.co/api/v1/products/${id}`).then((res) => setUser(res.data)
    );
  }, [id])
  
  return (
  
 
      <>
    
      

      </>

  )



}

export default ItemDetailContainer
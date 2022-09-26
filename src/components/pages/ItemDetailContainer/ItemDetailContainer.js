import React, { useState, useEffect } from 'react'

//css
import '../../../App.css'

//firebase
import { doc, getDoc, getFirestore } from 'firebase/firestore'

//React router dom
import { useParams } from 'react-router'

//Card
import ItemDetail from '../../Card/ItemDetail'





function ItemDetailContainer() {

  const [user, setUser] = useState([])

  let { id } = useParams();



  useEffect(() => {
    const getStore = getFirestore();
    const selectDoc = doc(getStore, 'products', id);
    getDoc(selectDoc).then(res => setUser({id: res.id, ...res.data()}))

  }, [id]);
  
  return (
    <ItemDetail data={user} />
  );



}

export default ItemDetailContainer
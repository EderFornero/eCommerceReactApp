import React from 'react'

//COMPONENTS
import ItemListContainer from '../ItemListContainer/ItemListContainer';
import ItemCount from '../Counter/ItemCount';

function Home() {
  return (
    <>
    <h1 style={{textAlign: 'center', textDecoration: 'underline'}}> Breaking Bad Characters </h1>
     <ItemListContainer />
     <ItemCount />
    </>
  )
}

export default Home
import React from 'react'

//COMPONENTS
import ItemListContainer from '../ItemListContainer/ItemListContainer';
import Counter from '../Counter/Counter';

function Home() {
  return (
    <>
    <h1 style={{textAlign: 'center', textDecoration: 'underline'}}> Breaking Bad Characters </h1>
     <ItemListContainer />
     <Counter />
    </>
  )
}

export default Home
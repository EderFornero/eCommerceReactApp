import React from 'react'

//React router dom

import { Link } from 'react-router-dom'

//COMPONENTS
import ItemListContainer from '../ItemListContainer/ItemListContainer';


function Home() {
  return (
    <>
      <div>
        <h1 style={{ textAlign: 'center', textDecoration: 'underline' }}> Breaking Bad Characters </h1>
        <ul>
          <li>
            <Link to="/category/alive">Alive</Link>
          </li>
          <li>
            <Link to="/category/deceased">Deceased</Link>
          </li>
          <li>
            <Link to="/category/presumed">Presumed dead</Link>
          </li>


        </ul>
      </div>
      <ItemListContainer />
    </>
  )
}

export default Home
import React from 'react'
import { NavLink } from 'react-router-dom';

//COMPONENTS
import ItemListContainer from '../ItemListContainer/ItemListContainer';


function Home() {
  return (
    <>
      <ul style={{listStyle: 'none'}}>
      <li>
          <NavLink className="nav_link" to='/'>All products</NavLink>
        </li>
        <li>
          <NavLink className="nav_link" to='/category/Watch'>Watches</NavLink>
        </li>
        <li>
        <NavLink className="nav_link" to='/category/Fragance'>Fragances</NavLink>
        </li>
        <li>
        <NavLink className="nav_link" to='/category/Handbag'>Handbags</NavLink>
        </li>
      </ul>
      <ItemListContainer />
    </>
  )
}

export default Home
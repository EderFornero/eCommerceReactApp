import React from 'react'

//css
import '../../App.css'

//router
import { NavLink } from 'react-router-dom';

//COMPONENTS
import ItemListContainer from '../ItemListContainer/ItemListContainer';


function Home() {
  return (
    <>
      <ul className="ul-category" style={{listStyle: 'none'}}>
      <li className='li-category'>
          <NavLink className="nav_link" to='/'>AllProducts</NavLink>
        </li>
        <li className='li-category'>
          <NavLink className="nav_link" to='/category/Watch'>Watches</NavLink>
        </li>
        <li className='li-category'>
        <NavLink className="nav_link" to='/category/Fragance'>Fragances</NavLink>
        </li>
        <li className='li-category'>
        <NavLink className="nav_link" to='/category/Handbag'>Handbags</NavLink>
        </li>
      </ul>
      <ItemListContainer />
    </>
  )
}

export default Home
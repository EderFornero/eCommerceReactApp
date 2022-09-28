import React, { useState } from 'react'
import '../../App.css'

//ROUTER
import { Link } from 'react-router-dom'

//Styled
import styled from 'styled-components'

//Components
import NavbarButton from './NavbarButton'
import CartWidget from "../CartWidget/CartWidget";


function Navbar() {

  const [clicked, setClicked] = useState(false)
  const getClick = () => {
    setClicked(!clicked)
  }
  return (
    <>
      <Nav>
      <Link to='/home' className='font-header' style={{zIndex: 2}}><h2 style={{fontSize: '30px'}}>Beauty <span>&</span> Elegance</h2></Link>


        <div className={`items ${clicked ? 'active' : ''}`}>
         
          <Link to="/">Home</Link>
          <Link to="/watch">Wristlet-Watch</Link>
          <Link to="/handbag">Handbags</Link>
          <Link to="/fragance">Fragrances</Link>
          <Link to=""><CartWidget /></Link>
          
        </div>
        <div className='menu'>
          <NavbarButton clicked={clicked} handleClick={getClick} />
        </div>
        <BackgroundMenu className={`initial ${clicked ? 'active' : ''}`}></BackgroundMenu>
      </Nav>

    </>
  );
}

export default Navbar

const Nav = styled.nav`
background-color: #ece4a4;
  padding: .5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  
h2{ 
   font-weight: 400;
   color: #202020;
   span{ 
    font-weight: bolder;
   }
}
div{ 
    a{ 
    font-family: Arial, Helvetica, sans-serif;
    margin-right: 1rem;
    color: #464646;
    text-decoration: none;
}
  a:hover{
    border-radius: 5px;
    background-color: beige;
    transition: .5s;
  }
}
.items{ 
  position: absolute;
  z-index: 2;
  top: -700px;
  left: -1000px;
  margin-left: auto;
  margin-right: auto;
  align-items: center;
  transition: all 1s ease;
   a{
    margin: 1.5rem;
    font-size: 1.5rem;
    color: black;
    display: block;
  }
  @media (min-width: 961px) { 
    margin: 0px;
    position: initial;
    a{
      font-size: 1.3rem;
      color: #464646;
      display: inline;
    }
  }
}
.items.active{
    width: 100%;
    display: block;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    top: 30%;
    left: 0px;
    right: 0px;
    text-align: center;
    
    a{ 
      font-size: 1.5rem;
      color: #464646;
    }
  }
.menu{ 
  z-index: 2;
  @media (min-width: 961px){
    display: none;
  }
}
`

const BackgroundMenu = styled.div`
      position: absolute;
      background-color: #ece4a4;
      top: -1000;
      left: -1000;
      transition: all 1.2s ease;
      z-index: -1;
        &.active{
          z-index: 1;
          border-radius: 0 0 75% 0;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }
        
`



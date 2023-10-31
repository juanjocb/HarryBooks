import React from 'react'
import { Menu } from './Menu/Menu'
import './Header.css'

export const Header = () => {
  return (
    <>
      <div className='header'>
        <h1>Harry Books - Tienda Online</h1>
        <Menu palabra="Inicio" palabra2="Carrito"/>
      </div>
    </>
  )
}

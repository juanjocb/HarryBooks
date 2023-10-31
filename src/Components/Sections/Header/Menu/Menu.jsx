import React from 'react'
import './Menu.css'
import { Link } from 'react-router-dom'

export const Menu = (props) => {
    return (
        <>
            <nav>
                <ul>
                    <Link className="ruta" to={"/"}>{props.palabra}</Link>
                    <Link className="ruta" to={"/carritoCompras"}>{props.palabra2}</Link>
                </ul>


            </nav>
        </>
    )
}

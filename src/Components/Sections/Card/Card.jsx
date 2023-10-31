import { React, useState, useContext } from 'react'
import './Card.css'
import CantCompra from '../HookContext/HookContext';

export const Card = ({ libro }) => {

  const [contador, setContador] = useState(0);
  const [cantDisponible, setCantDisponible] = useState(libro.cantidad);
  const { valor, setValor } = useContext(CantCompra);


  const añadirCarrito = () => {
    if (cantDisponible > 0) {
      setCantDisponible(cantDisponible - 1)
      setContador(contador + 1);
    }
  };

  const quitarCarrito = () => {
    if (contador > 0) {
      setCantDisponible(cantDisponible + 1);
      setContador(contador - 1);
    }
  };

  const comprar = () => {

    const datosCompra = {
      nombre: libro.titulo,
      precio: libro.precio,
      cantidad: contador

    }
    setValor([...valor, datosCompra])
  }

  return (
    <li key={libro.id}>
      <h2>{libro.titulo}</h2>
      <div className='portada'>
        <img src={libro.imagen} alt={libro.titulo} />
      </div>
      <div className='textos'>
        <div className='prrfo'>
          <p><b>Precio:</b></p>
          <p className="num">${libro.precio}</p>
        </div>
        <div className='prrfo'>
          <p><b>Cantidad Disponible:</b></p>
          <p className="num">{cantDisponible}</p>
        </div>
        <div className="contenedor">


          <button className="botonComprar" onClick={comprar}  >Comprar</button>

          <div className="contenedor-botones">
            <button className="boton1 amarillo" onClick={añadirCarrito}>+</button>
            <button className="boton1 amarillo" onClick={quitarCarrito}>-</button>
          </div>
        </div>
        <p className="contador">{contador}</p>
      </div>
    </li>
  );
};



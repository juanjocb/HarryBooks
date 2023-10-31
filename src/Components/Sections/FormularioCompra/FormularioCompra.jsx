import React, { useState, useContext } from 'react';
import CantCompra from '../HookContext/HookContext';
import './FormularioCompra.css'

export const FormularioCompra = () => {

    const { valor } = useContext(CantCompra);

    const [cantidad, setCantidad] = useState(valor.cantidad);
    const [nombre, setTitulo] = useState(valor.nombre);
    const [precio, setPrecio] = useState(valor.precio);

    const calcularPrecioFinal = (cant, precio) => {
        return cant * precio;
    };

    return (
        <div className='cajonCompra'>
            <thead>
                <tr>
                    <th className='cajon'>Cantidad</th>
                    <th className='cajon'>Título del Libro</th>
                    <th className='cajon'>Precio Unitario</th>
                    <th className='precioFinal'>Precio Final</th>
                </tr>
            </thead>
            {valor.map(el => (
                <table className='table'>
                    <tbody>
                        <tr>
                            <td>
                                <input
                                    type="number"
                                    value={el.cantidad}
                                    onChange={(e) => setCantidad(parseInt(e.target.value, 10))}
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    value={el.nombre}
                                    onChange={(e) => setTitulo(e.target.value)}
                                />
                            </td>
                            <td>
                                <input
                                    type="number"
                                    value={el.precio}
                                    onChange={(e) => setPrecio(parseInt(e.target.value, 10))}
                                />
                            </td>
                            <td>${calcularPrecioFinal(el.cantidad, el.precio)}</td>
                        </tr>
                    </tbody>
                </table>
            ))}

        </div>
    );
};

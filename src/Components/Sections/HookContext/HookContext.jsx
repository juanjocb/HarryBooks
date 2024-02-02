import { React, useState, createContext } from 'react'


const CantCompra = createContext({valor:[]});

export const HookContext = ({ children }) => {
    const [valor, setValor] = useState([])
    return (
        <CantCompra.Provider value={{ valor, setValor }}>
            {children}
        </CantCompra.Provider>
    )
}
export default CantCompra

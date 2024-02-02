import { Route, Routes } from 'react-router-dom'
import './App.css'
import { TiendaOnline } from './Components/pages/TiendaOnline/TiendaOnline'
import { CarritoCompras } from './Components/pages/CarritoCompras/CarritoCompras'
import { NotFound } from './Components/NotFound/NotFound'
import { HookContext } from './Components/Sections/HookContext/HookContext'

function App() {

  return (
    <>

      <HookContext>
        <Routes>
          <Route path="/" element={<TiendaOnline />}></Route>
          <Route path="/carritoCompras" element={<CarritoCompras />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </HookContext>


    </>
  )
}

export default App

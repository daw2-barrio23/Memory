import { Header } from "./componentes/Header"
import { Tarjeta } from "./componentes/Tarjeta"
import { Juego } from "./vistas/Juego"



function App() {
  

  return (
    <>
      <Header />
      <Juego />
      <Tarjeta nombre="Capitan" imagen="../public/capitan.webp"/>
    </>
  )
}

export default App

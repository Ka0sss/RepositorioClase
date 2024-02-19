import ComponenteHijo from "./assets/Components/ComponenteHijo/ComponenteHijo";
import { useState } from "react";

function App() {
  const [mensaje, setMensaje] = useState("Mensaje desde el padre");
  const CambiarMensaje = (msj) => {
    setMensaje(msj);
  };
  return (
    <>
      <p>Componente Padre </p>
      <ComponenteHijo nombre="Andres" CambiarMensaje={CambiarMensaje} />
      <hr />
      <p>{mensaje}</p>
    </>
  );
}

export default App;

import ComponenteNieto from "../ComponenteNieto";

const ComponenteHijo = ({ nombre, CambiarMensaje }) => {
  return (
    <>
      <p>Componente Hijo</p>
      <p>Concadena lo Siguiente: {nombre}</p>
      <button onClick={(_) => CambiarMensaje("Mensaje Desde el Hijo")}>
        Cambiar Mensaje
      </button>
      <ComponenteNieto nombre={"Enrique"} CambiarMensaje={CambiarMensaje}>
        <span>InnerHTML</span>
      </ComponenteNieto>
    </>
  );
};

export default ComponenteHijo;

function ComponenteNieto({ nombre, children, CambiarMensaje }) {
  return (
    <>
      <p>Componente nieto</p>
      <p>Este es el nombre del componenteNieto: {nombre}</p>
      <button onClick={(_) => CambiarMensaje("Mensaje desde el nieto")}>
        Cambiar Mensaje
      </button>

      {children}
    </>
  );
}

export default ComponenteNieto;

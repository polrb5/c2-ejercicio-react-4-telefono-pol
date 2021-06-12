export const Accion = () => {
  return (
    <>
      <a href="llamar" className="llamar">
        Llamar
      </a>
      {/* <!-- Sólo se tiene que ver un botón u otro --> */}
      <a href="colgar" className="colgar activo">
        Colgar
      </a>
    </>
  );
};

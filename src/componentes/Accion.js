export const Accion = (props) => {
  const { numberDisplay, botonLlamar, botonLlamarActivo } = props;
  return (
    <>
      <button
        href="llamar"
        className={`llamar${numberDisplay.length === 9 ? " activo" : ""}${
          botonLlamar ? "" : " off"
        }`}
        onClick={botonLlamarActivo}
      >
        Llamar
      </button>
      {/* <!-- Sólo se tiene que ver un botón u otro --> */}
      <button
        href="colgar"
        className={`${botonLlamar ? "off" : "colgar activo"}`}
        onClick={botonLlamarActivo}
      >
        Colgar
      </button>
    </>
  );
};

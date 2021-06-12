export const Accion = (props) => {
  const { numberDisplay } = props;
  return (
    <>
      <a
        href="llamar"
        className={`llamar${numberDisplay.length === 9 ? " activo" : ""}`}
      >
        Llamar
      </a>
      {/* <!-- Sólo se tiene que ver un botón u otro --> */}
      <a href="colgar" className="colgar activo">
        Colgar
      </a>
    </>
  );
};

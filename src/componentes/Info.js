export const Info = (props) => {
  const { BotonLlamarActivo, botonLlamar } = props;
  return (
    <>
      <span
        className={`mensaje${botonLlamar ? " off" : ""}`}
        onClick={BotonLlamarActivo}
      >
        Llamando...
      </span>
    </>
  );
};

import { Accion } from "./Accion";
import { Display } from "./Display";

export const Acciones = (props) => {
  const { numberDisplay, botonLlamarActivo, botonLlamar } = props;
  return (
    <div className="acciones">
      <Display numberDisplay={numberDisplay} />
      {/* <!-- El botón de llamar debe tener la clase "activo" cuando --> */}
      {/* <!-- el número de teléfono tiene 9 cifras --> */}
      <Accion
        numberDisplay={numberDisplay}
        botonLlamar={botonLlamar}
        botonLlamarActivo={botonLlamarActivo}
      />
    </div>
  );
};

import { useState } from "react";
import { Acciones } from "./componentes/Acciones";
import { Info } from "./componentes/Info";
import { Teclado } from "./componentes/Teclado";

function App() {
  // const [numbers, setNumbers] = useState(1, 2, 3, 4, 5, 6, 7, 8, 9, 0);
  // const phoneNumbers = numbers;
  const phoneNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  const [numberDisplay, setNumberDisplay] = useState("");
  const [botonLlamar, setBotonLlamar] = useState(true);
  // const [botonTelefono, setBotonTelefono] = useState(true)
  const printNumber = (number) => {
    if (numberDisplay.length === 9) {
      return;
    }
    setNumberDisplay(numberDisplay + number);
  };
  const clearNumber = () => {
    setNumberDisplay(numberDisplay.slice(0, -1));
  };

  const botonLlamarActivo = () => {
    if (botonLlamar) {
      setTimeout(() => {
        setBotonLlamar(true);
        setNumberDisplay("");
      }, 5000);
      setBotonLlamar(false);
    } else if (!botonLlamar) {
      setNumberDisplay("");
      setBotonLlamar(true);
    }
  };

  return (
    <div className="contenedor">
      <Info botonLlamarActivo={botonLlamarActivo} botonLlamar={botonLlamar} />
      <main className="telefono">
        <Teclado
          phoneNumbers={phoneNumbers}
          printNumber={printNumber}
          clearNumber={clearNumber}
        />
        <Acciones
          numberDisplay={numberDisplay}
          botonLlamarActivo={botonLlamarActivo}
          botonLlamar={botonLlamar}
        />
      </main>
    </div>
  );
}

export default App;

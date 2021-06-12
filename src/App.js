import { useState } from "react";
import { Acciones } from "./componentes/Acciones";
import { Info } from "./componentes/Info";
import { Teclado } from "./componentes/Teclado";

function App() {
  // const [numbers, setNumbers] = useState(1, 2, 3, 4, 5, 6, 7, 8, 9, 0);
  // const phoneNumbers = numbers;
  const phoneNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  const [numberDisplay, setNumberDisplay] = useState("");
  // const [botonTelefono, setBotonTelefono] = useState(true)
  const printNumber = (number) => {
    if (numberDisplay.length === 9) {
      return;
    }
    setNumberDisplay(numberDisplay + number);
  };
  const clearNumber = () => {
    setNumberDisplay("");
  };

  return (
    <div className="contenedor">
      <Info />
      <main className="telefono">
        <Teclado
          phoneNumbers={phoneNumbers}
          printNumber={printNumber}
          clearNumber={clearNumber}
        />
        <Acciones numberDisplay={numberDisplay} />
      </main>
    </div>
  );
}

export default App;

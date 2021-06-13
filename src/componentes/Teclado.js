import { Tecla } from "./Tecla";

export const Teclado = (props) => {
  const { phoneNumbers, printNumber, clearNumber, numberDisplay } = props;
  return (
    <div className="botones">
      <ol className="teclado">
        <Tecla
          phoneNumbers={phoneNumbers}
          printNumber={printNumber}
          clearNumber={clearNumber}
          numberDisplay={numberDisplay}
        />
      </ol>
    </div>
  );
};

export const Tecla = (props) => {
  const { phoneNumbers, printNumber, clearNumber, botonLlamar } = props;

  return (
    <>
      {phoneNumbers.map((number) => (
        <li key={number} onClick={() => printNumber(number)}>
          <button disabled={botonLlamar ? true : false}>{number}</button>
        </li>
      ))}
      <li>
        <button className="big" onClick={clearNumber}>
          borrar
        </button>
      </li>
    </>
  );
};

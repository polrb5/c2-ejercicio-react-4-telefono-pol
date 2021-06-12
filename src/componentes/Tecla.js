export const Tecla = (props) => {
  const { phoneNumbers, printNumber, clearNumber } = props;

  return (
    <>
      {phoneNumbers.map((number) => (
        <li key={number} onClick={() => printNumber(number)}>
          <button>{number}</button>
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

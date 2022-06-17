import { useSelector } from "react-redux";

function CounterDisplays() {

  const number = useSelector(
    (store) => {
      return store.counter.number;
    }
  );


  return (
    <h1 className="CounterDisplays">
      {number}
    </h1>
  );
}

export default CounterDisplays;
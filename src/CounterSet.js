import { useState } from "react";
import { useDispatch } from "react-redux";

function CounterSet() {

  const dispatch = useDispatch();

  const [number, setNumber] = useState(0);



  const incrementAction = {type: "counter/increment"};

  return (
    <div className="CounterSet" > 
      <input value={number} type="number" onChange={({target}) => setNumber(target.value)} />
      <button onClick={() => dispatch({ type: "counter/set", payload: number })}>
        set
      </button>
    </div>
  );
}

export default CounterSet;
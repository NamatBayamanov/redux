import { useDispatch } from "react-redux";

function CounterControls() {

  const dispatch = useDispatch();



  const incrementAction = {type: "counter/increment"};

  return (
    <div className="CounterControl" > 
      <button onClick={() => dispatch({ type: "counter/increment" })}>
        +
      </button>

      <button onClick={() => dispatch({ type: "counter/reset" })}>
        reset
      </button>

      <button onClick={() => dispatch({ type: "counter/decrement" })}>
        -
      </button>
    </div>
  );
}

export default CounterControls;
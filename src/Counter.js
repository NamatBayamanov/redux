import { useState } from "react";
import CounterControls from "./CounterControls";
import CounterDisplays from "./CounterDisplay";

function Counter() {

  const [counter, setCounter] = useState(0);

  function onIncrement() {
    setCounter(counter + 1);
  }

  function onDecrement() {
    setCounter(counter - 1);
  }




  return (
    <div className="Counter">
      <CounterDisplays counter={counter}/>
      <CounterControls onIncrement={onIncrement} onDecrement={onDecrement}/>
    </div>
  );
}

export default Counter;
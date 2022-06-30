import CounterControls from "./CounterControls";
import CounterDisplays from "./CounterDisplay";
import CounterSet from "./CounterSet";

function Counter() {


  return (
    <div className="Counter">
      <CounterDisplays />
      <CounterControls/>
      <CounterSet/>
    </div>
  );
}

export default Counter;
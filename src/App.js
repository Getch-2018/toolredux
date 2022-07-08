import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementByAmount, changeValue,divideByAmount } from './redux/counterSlice';

function App() {
  const count = useSelector(state => state.counter.value);
  const dispatch = useDispatch();

  const [counterNumber, setCounterNumber] = React.useState(0);

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Counter: {count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(incrementByAmount(20))}>Increments by 20</button>

      {/* <div>
        <input type="number" value={counterNumber} onChange={e => setCounterNumber(e.target.value)}/>
        <button onClick={()=>dispatch(changeValue(counterNumber))}>Submit</button>
      </div> */}

      <div>
        <input type="number" value={counterNumber} onChange={e => setCounterNumber(e.target.value)}/>
        <button onClick={()=>dispatch(divideByAmount(counterNumber))}>Submit</button>
      </div>
    </div>
  );
}

export default App;
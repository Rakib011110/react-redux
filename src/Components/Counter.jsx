import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../Redux/Features/Counter/CounterSlice";

const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  console.log(count);
  const dispatch = useDispatch();
  return (
    <div>
      <button onClick={() => dispatch(increment())}>increament </button>
      <div>
        <h1>{count} </h1>
      </div>
      <button onClick={() => dispatch(decrement())}>decreament </button>
    </div>
  );
};

export default Counter;

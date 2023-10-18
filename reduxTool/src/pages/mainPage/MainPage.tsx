import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { counterActions } from "../../store";
import classes from "./MainPage.module.css";

type CounterState = {
  counter: {
    value: number,
    showCounter: boolean,
  };
  showCounter: boolean;
};

const MainPage: React.FC = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state: CounterState) => state.counter.value);
  const show = useSelector((state: CounterState) => state.counter.showCounter);
  const increaseAmount = 5;
  const incrementHandler = () => {
    dispatch(counterActions.increment());
    console.log("incrementHandler");
  };

  const increaseHandler = (amount: number) => {
    dispatch(counterActions.increase({ amount: amount }));
    console.log("increaseHandler");
  };

  const decrementHandler = () => {
    dispatch(counterActions.decrement());
    console.log("decrementHandler");
  };

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
    console.log("toggleCounterHandler");
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button
          onClick={() => {
            increaseHandler(increaseAmount);
          }}
        >
          Increment by {increaseAmount}
        </button>
      </div>
      <div>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default MainPage;

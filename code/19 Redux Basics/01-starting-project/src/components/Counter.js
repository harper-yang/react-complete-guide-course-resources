import classes from './Counter.module.css';
import {useDispatch, useSelector} from "react-redux";

import {counterActions} from "../store/counter";

const Counter = () => {

  const count = useSelector(state => state.counter.count);
  const showCounter = useSelector(state => state.counter.showCounter);

  const dispatch = useDispatch();

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggle())
  };

  return (
      <main className={classes.counter}>
        <h1>Redux Counter</h1>
        {showCounter && <div className={classes.value}>{count}</div>}
        <div>
          <button onClick={() => dispatch(counterActions.increase(10))}>increase</button>
          <button onClick={() => dispatch(counterActions.decrease({amount: 10}))}>decrease</button>
        </div>
        <button onClick={toggleCounterHandler}>Toggle Counter</button>
      </main>
  );
};

export default Counter;

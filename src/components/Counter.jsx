import { useEffect } from 'react';
import useCounterStore from '../store/counterStore';

// const logCount = () => {
//   const count = useCounterStore.getState().count;
//   console.log('count: ', count);
// };

const setCounteState = () => {
  useCounterStore.setState({ count: 100 });
};

const Counter = () => {
  const count = useCounterStore((state) => state.count);
  return <ChildComponent count={count} />;
};

// eslint-disable-next-line react/prop-types
const ChildComponent = ({ count }) => {
  //const increment = useCounterStore((state) => state.increment);

  // const incrementAsync = useCounterStore((state) => state.incrementAsync);
  // const decrement = useCounterStore((state) => state.decrement);

  const { incrementAsync, decrement } = useCounterStore((state) => ({
    incrementAsync: state.incrementAsync,
    decrement: state.decrement,
  }));

  useEffect(() => {
    //logCount();
    setCounteState();
  }, []);
  return (
    <div>
      <p>{count}</p>
      <button
        onClick={incrementAsync}
        className='mx-2'
      >
        Increment
      </button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default Counter;

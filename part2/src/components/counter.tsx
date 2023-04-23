import { useReducer, useState } from 'react';

const ruducer = (count: number, newValue: number): number => {
  return newValue;
};

type ReducerState = ReturnType<typeof ruducer>;

const Counter = () => {
  // const [count, setCount] = useState(0);
  // const [value, setValue] = useState(count);

  const [count, setCount] = useReducer(ruducer, 0);

  return (
    <section className="flex w-2/3 flex-col items-center gap-8 border-4 border-primary-500 bg-white p-8 shadow-lg">
      <h1>Days Since the Last Accident</h1>
      <p className="text-6xl">{count}</p>
      <div className="flex gap-2">
        <button onClick={() => setCount(count - 1)}>➖ Decrement</button>
        <button onClick={() => setCount(0)}>🔁 Reset</button>
        <button onClick={() => setCount(() => count + 1)}>➕ Increment</button>
      </div>
      <div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setCount(value);
          }}
        >
          <input
            type="number"
            value={value}
            onChange={(e) => setValue(e.target.valueAsNumber)}
          />
          <button type="submit">Update Counter</button>
        </form>
      </div>
    </section>
  );
};

export default Counter;

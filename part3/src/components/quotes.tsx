import { ChangeEventHandler, PropsWithChildren } from 'react';

type QuotesProps = {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
  onSubmit: React.FormEventHandler<HTMLFormElement>;
};

const Quotes = ({
  children,
  setCount,
  count,
  onSubmit,
}: PropsWithChildren<QuotesProps>) => {
  const onChangeHandler: ChangeEventHandler<HTMLInputElement> = (e) => {
    const { value } = e.target;
    const parsedValue = parseInt(value);
    if (isNaN(parsedValue)) return;
    setCount(parsedValue);
  };

  return (
    <section className="flex flex-col gap-8">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit(e);
        }}
      >
        <label htmlFor="number-of-quotes-to-load" className="block">
          Number of Quotes to Load
        </label>
        <div className="flex">
          <input
            id="number-of-quotes-to-load"
            className="w-full"
            type="number"
            min="0"
            max="25"
            value={count}
            onChange={onChangeHandler}
          />
          <button type="submit">Load Quotes</button>
        </div>
      </form>
      <div className="grid grid-cols-2 gap-4">{children}</div>
    </section>
  );
};

export default Quotes;

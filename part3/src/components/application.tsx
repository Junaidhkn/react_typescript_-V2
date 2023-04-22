import { useState } from 'react';
import Quotes from './quotes';
import InspirationalQuote from './quote';
import Loading from './loading';

export type Quote = {
  id: number;
  content: string;
  source?: string;
};

export const fetchRandomQuote = async () => {
  const response = await fetch(`/api/quotes/random`);
  return response.json();
};

export const fetchQuotes = async (count: number) => {
  const response = await fetch(`/api/quotes?limit=${count}`);
  return response.json();
};

const Application = () => {
  // write a use state hook showcasing the quote type being Quote added above
  const [quotes, setQuotes] = useState<Quote[] | undefined>([]);
  const [count, setCount] = useState(5);

  if (!quotes) return <Loading />;

  return (
    <main className="mx-auto w-full max-w-2xl py-16">
      <Quotes
        count={count}
        setCount={setCount}
        onSubmit={() => fetchQuotes(count).then(setQuotes)}
      >
        {quotes.map((quote) => {
          return (
            <InspirationalQuote
              key={quote.id}
              content={quote.content}
              source={quote.source}
            />
          );
        })}
      </Quotes>
    </main>
  );
};

export default Application;

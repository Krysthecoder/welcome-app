import { useEffect, useState } from 'react';
import './App.css';
import MessageCounter from './components/MessageCounter';

function App() {
  const [advice, setAdvice] = useState<string>(' ');
  const [count, setCount] = useState<number>(0);
  async function getAdvice() {
    const res = await fetch('https://api.adviceslip.com/advice');
    const data = await res.json();
    setAdvice(data.slip.advice);
    setCount(count + 1);
  }

  useEffect(() => {
    getAdvice();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <h1 className="text-4xl">
        {advice == '' ? 'Hi, please get a new advice' : advice}
      </h1>
      <button
        className=" border-2 rounded-xl border-red-400 bg-red-700 text-white p-2"
        onClick={() => {
          getAdvice();
        }}
      >
        Get advice
      </button>
      <MessageCounter messages={count} />
    </div>
  );
}

export default App;

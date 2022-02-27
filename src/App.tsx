import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import './App.css';

const COUNTDOWN_INITIAL_TIME_IN_SECONDS = 25 * 60; // 25 minutes

function App() {
  const [secondsAmount, setSecondsAmount] = useState(
    COUNTDOWN_INITIAL_TIME_IN_SECONDS,
  );

  useEffect(() => {
    if (secondsAmount === 0) {
      toast('Time finished ⏲️', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }

    setTimeout(() => {
      setSecondsAmount((state) => state - 1);
    }, 1000);
  }, [secondsAmount]);

  const minutes = Math.floor(secondsAmount / 60);
  const seconds = secondsAmount % 60;

  return (
    <main>
      <h1>{String(minutes).padStart(2, '0')}</h1>
      <h1>:</h1>
      <h1>{String(seconds).padEnd(2, '0')}</h1>
    </main>
  );
}

export default App;

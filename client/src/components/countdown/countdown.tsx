import { useEffect, useState } from 'react';
import './countdown.scss';

const Countdown = () => {
  const [letsGo, setLetsGo] = useState<string>('');
  const [count, setCount] = useState<number>(20);

  useEffect(() => {
    const timerId = setTimeout(() => {
      counter();
    }, 1000);
    return () => clearTimeout(timerId);
  }, [count]);

  const counter = () => {
    if (count > 0) {
      setCount(count - 1);
    } else {
      setLetsGo('ПОЕХАЛИ!');
    }
  };

  return (
    <div className={'countDownContainer'}>
      <div
        className={
          letsGo === 'ПОЕХАЛИ!'
            ? 'countDownContainer__countdown'
            : 'countDownContainer__go'
        }
      >
        {letsGo === 'ПОЕХАЛИ!' ? letsGo : count}
      </div>
    </div>
  );
};

export default Countdown;

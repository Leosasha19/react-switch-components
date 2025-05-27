import React, { useEffect, useState} from 'react';
import './countdown.scss'


const Countdown = () => {
    const [count, setCount] = useState(20)

    useEffect(() => {
        const timerId = setTimeout(() => {counter()}, 1000)
        return () => clearTimeout(timerId)
    },[count])

    const counter = () => {
        if (count > 0) {
            setCount(count -1)
        } else {
            setCount("ПОЕХАЛИ!")
        }
    }

    return (
        <div className={"countDownContainer"}>
            <div className={count === "ПОЕХАЛИ!" ? "countDownContainer__countdown" : "countDownContainer__go"}>{count}</div>
        </div>
    );
};

export default Countdown;
import React, {useState} from 'react';
import './time.scss'

const Time = () => {

    const [time] = useState(new Date().toLocaleTimeString())

    return (
        <div className={"timeContainer"}>
           <div className={"timeContainer__time"}>{time}</div>
        </div>
    );
};

export default Time;
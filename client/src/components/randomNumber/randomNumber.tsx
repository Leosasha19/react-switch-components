import React from 'react';
import RandomNumberService from "../../frontendServices/randomNumberService.ts";
import './randomNumber.scss';

const RandomNumber = () => {
    return (
        <div className={"randomNumberContainer"}>
            <div className={"randomNumberContainer__number"}>{RandomNumberService.newNumber()}</div>
        </div>
    );
};

export default RandomNumber;
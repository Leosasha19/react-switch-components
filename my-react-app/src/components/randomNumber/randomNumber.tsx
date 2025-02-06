import React from 'react';
import './randomNumber.scss';
import RandomNumberService from "../../frontendServices/randomNumberService.ts";

const RandomNumber = () => {
    return (
        <div className={"randomNumberContainer"}>
            <div className={"randomNumberContainer__number"}>{RandomNumberService.newNumber()}</div>
        </div>
    );
};

export default RandomNumber;
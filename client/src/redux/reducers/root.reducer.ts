import {combineReducers} from "@reduxjs/toolkit";
import SwitchStateReducer from '../../features/switchSlice.ts'

export const rootReducer = combineReducers({
    SwitchState: SwitchStateReducer
})
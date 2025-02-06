import {createSlice} from "@reduxjs/toolkit";
import {RootState} from "../redux/store/store.ts";

export interface SwitchState {
    random: boolean;
    time: boolean;
    count: boolean;
}
export const initialState: SwitchState = {
    random: true,
    time: false,
    count: false,
}

const switchSlice = createSlice({
    name: "switch",
    initialState: initialState,
    reducers: {
        setCountOn ( state) {
            state.random = false;
            state.time = false;
            state.count = true;
        },
        setTimeOn ( state ) {
            state.random = false;
            state.time = true;
            state.count = false;
        },
        setRandomOn ( state ) {
            state.random = true;
            state.time = false;
            state.count = false;
        }
    }
})

export const {setCountOn , setTimeOn, setRandomOn } = switchSlice.actions;
export default switchSlice.reducer;
export const selectSwitch = (state: RootState) => state.SwitchState
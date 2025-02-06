import {setCountOn, setRandomOn, setTimeOn} from "../features/switchSlice.ts";
import {useDispatch} from "react-redux";

const dispatch = useDispatch();

class SwitchService {
 static timeOn () {
     dispatch(setTimeOn())
 }
 static randomOn () {
     dispatch(setRandomOn())
 }
 static countOn () {
     dispatch(setCountOn())
 }
}

export default SwitchService;
import {setCountOn, setRandomOn, setTimeOn} from "../features/switchSlice.ts";
import {AppDispatch} from "../redux/store/store.ts";

class SwitchService {

 static timeOn (dispatch: AppDispatch) {
     dispatch(setTimeOn())
 }
 static randomOn (dispatch: AppDispatch) {
     dispatch(setRandomOn())
 }
 static countOn (dispatch: AppDispatch) {
     dispatch(setCountOn())
 }
}

export default SwitchService;
import {useAppSelector} from "../hooks/redux.ts";
import {selectSwitch} from "../features/switchSlice.ts";
import RandomNumber from "../components/randomNumber/randomNumber.tsx";
import Time from "../components/time/time.tsx";
import Countdown from "../components/countdown/countdown.tsx";
import SwitchService from "../frontendServices/switchService.ts";
import {useDispatch} from "react-redux";
import './App.scss'

function App() {
    const switchState = useAppSelector(selectSwitch);
    const dispatch = useDispatch()

    const showComponent = () => {
        if(switchState.random) {
            return (
                <RandomNumber/>
            )
        } else if(switchState.time) {
            return (
                <Time/>
            )
        } else {
            return (
                <Countdown/>
            )
        }
    }

  return (
    <>
        <div className={"mainContainer"}>
            <div className={"mainContainer__buttonsBox"}>
                <button
                    onClick={() => SwitchService.randomOn(dispatch)}
                    className={"mainContainer__buttonsBox__switchButton"}>
                    Рандом
                </button>
                <button
                    onClick={() => SwitchService.timeOn(dispatch)}
                    className={"mainContainer__buttonsBox__switchButton"}>
                    Время
                </button>
                <button
                    onClick={() => SwitchService.countOn(dispatch)}
                    className={"mainContainer__buttonsBox__switchButton"}>
                    Таймер
                </button>
            </div>
            {showComponent()}
        </div>
    </>
  )
}

export default App

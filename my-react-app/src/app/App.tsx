import './App.scss'
import RandomNumber from "../components/randomNumber/randomNumber.tsx";
import Time from "../components/time/time.tsx";
import Countdown from "../components/countdown/countdown.tsx";
import {useAppDispatch, useAppSelector} from "../hooks/redux.ts";
import {selectSwitch, setCountOn, setRandomOn, setTimeOn} from "../features/switchSlice.ts";
import SwitchService from "../frontendServices/switchService.ts";

function App() {

    const switchState = useAppSelector(selectSwitch);

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
                    onClick={SwitchService.randomOn}
                    className={"mainContainer__buttonsBox__switchButton"}>
                    Рандом
                </button>
                <button
                    onClick={SwitchService.timeOn}
                    className={"mainContainer__buttonsBox__switchButton"}>
                    Время
                </button>
                <button
                    onClick={SwitchService.countOn}
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

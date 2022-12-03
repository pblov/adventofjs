import { useState } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import check from "../icons/check.svg";
import gear from "../icons/gear.svg";
import PomodoroInput from "./PomodoroInput";
import clx from "classnames";
import "./PomodoroTimer.css";

const PomodoroTimer = () => {
  const [minutes, setMinutes] = useState(15);
  const [seconds, setSeconds] = useState(10);
  const [isPlaying, setIsPlaying] = useState(false);
  const [edit, setEdit] = useState(false);
  const [timer, setTimer] = useState({ mins: minutes, secs: seconds });
  const durationOnSeconds = Number(timer.mins) * 60 + Number(timer.secs);

  const renderTime = ({ remainingTime }) => {
    if (remainingTime <= 0 && !edit) {
      setMinutes(0);
      setSeconds(0);
    }

    return (
      <div className="timer-container">
        <PomodoroInput
          edit={edit}
          minutes={minutes}
          seconds={seconds}
          remainingTime={remainingTime}
          onChangeMinutes={onChangeMinutes}
          onChangeSeconds={onChangeSeconds}
        />

        {!edit && (
          <button className="timer-button" onClick={handlePauseTime}>
            {!isPlaying ? "start" : "stop"}
          </button>
        )}

        <button
          className={clx("timer-icon-button", {
            "timer-icon-button-edit": edit,
          })}
          onClick={handleEditTimer}
        >
          <img src={edit ? check : gear} alt="icon" />
        </button>
      </div>
    );
  };

  const onChangeMinutes = (e) => {
    setMinutes(e.target.value);
  };

  const onChangeSeconds = (e) => {
    setSeconds(e.target.value);
  };

  const handleEditTimer = () => {
    setEdit(!edit);
    setTimer({ mins: minutes, secs: seconds });
  };

  const handlePauseTime = () => {
    setEdit(false);
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="pomodoro-container">
      <CountdownCircleTimer
        strokeWidth={9}
        isPlaying={isPlaying}
        size={500}
        duration={durationOnSeconds}
        colors={(["#000000"], edit ? ["#09A65A"] : ["#900A0A"])}
        trailColor={edit ? ["#09A65A"] : ["#000000"]}
      >
        {renderTime}
      </CountdownCircleTimer>
    </div>
  );
};

export default PomodoroTimer;

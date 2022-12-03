import "./PomodoroTimer.css";
import clx from "classnames";

const PomodoroInput = ({
  edit,
  minutes,
  seconds,
  remainingTime,
  onChangeMinutes,
  onChangeSeconds,
}) => {
  const parseMins = Math.floor(remainingTime / 60);
  const parseSeconds = remainingTime % 60;
  return (
    <div>
      {edit ? (
        <div className="timer-input-wrapper">
          <input
            className={clx("timer-input", "timer-input-edit")}
            type="text"
            onChange={onChangeMinutes}
            value={edit ? minutes : parseMins}
            maxLength="2"
          />
          :
          <input
            className={clx("timer-input", "timer-input-edit")}
            type="text"
            maxLength="2"
            onChange={onChangeSeconds}
            value={edit ? seconds : parseSeconds}
          />
        </div>
      ) : (
        <div className="timer-input-wrapper">
          <input
            className="timer-input"
            type="text"
            readOnly
            onChange={onChangeMinutes}
            value={edit ? minutes : parseMins}
            maxLength="2"
          />
          :
          <input
            className="timer-input"
            type="text"
            readOnly
            maxLength="2"
            onChange={onChangeSeconds}
            value={edit ? seconds : parseSeconds}
          />
        </div>
      )}
    </div>
  );
};

export default PomodoroInput;

import { IPropsTask } from "interfaces/interfaces";
import { toStringDateDay, toStringDateTime } from "utils/utilsTask";
import "styles/index.scss";
import { Checkbox, TextField } from "@mui/material";
import CreateIcon from "@mui/icons-material/Create";
import DeleteIcon from "@mui/icons-material/Delete";
import { apiRequestTasks } from "api/requestTasksUser";
import { useDispatch, useSelector } from "react-redux";
import { setStateTask } from "reduxStore/userReducer";
import { useState } from "react";

const Task = ({ props }: IPropsTask) => {
  const { textTask, checkBox, date, _id, login } = props;
  const [stateText, setStateText] = useState(false);
  const [newTextTask, setNewTextTask] = useState(textTask);
  const stateTask = useSelector((state: boolean) => state);
  const dispatch = useDispatch();

  const changeTask = async (check?: boolean, text?: string) => {
    try {
      let checked, textChange;
      if (check === undefined) {
        checked = checkBox;
      } else {
        checked = check;
      }

      if (text === undefined) {
        textChange = textTask;
      } else {
        textChange = text;
      }

      const task = {
        login,
        _id,
        textTask: textChange,
        checkBox: checked,
        date,
      };

      await apiRequestTasks("PUT", task);
      dispatch(setStateTask(!stateTask));
    } catch (err) {
      console.log(err);
    }
  };

  const deleteTask = async (id: string | undefined) => {
    try {
      await apiRequestTasks("DELETE", undefined, id);
      dispatch(setStateTask(!stateTask));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="block-task">
      <div className="left-block-task">
        <Checkbox
          onClick={() => {
            changeTask(!checkBox);
          }}
          checked={checkBox}
          color="default"
        />
        {stateText ? (
          <TextField
            autoFocus={true}
            onBlur={() => {
              setStateText(false);
              changeTask(undefined, newTextTask);
            }}
            onChange={(e) => setNewTextTask(e.target.value)}
            id="standard-basic"
            variant="standard"
            defaultValue={textTask}
          />
        ) : (
          <div>{textTask}</div>
        )}
      </div>
      <div className="right-block-task">
        <div className="icon">
          <CreateIcon onClick={() => setStateText(true)} />
        </div>
        <div className="icon">
          <DeleteIcon onClick={() => deleteTask(_id)} />
        </div>
        <div className="right-block-task-date">
          <div>{toStringDateDay(date)}</div>
          <div>{toStringDateTime(date)}</div>
        </div>
      </div>
    </div>
  );
};

export default Task;

import Task from "components/task";
import { DEFAULT_DATA_TASKS } from "constants/constants";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setDataTasks, setStateTask } from "reduxStore/userReducer";
import { loadData } from "utils/indexUtils";
import "styles/index.scss";
import { Button, TextField } from "@mui/material";
import { styles } from "styles/index";
import AddBoxIcon from "@mui/icons-material/AddBox";
import { apiRequestTasks } from "api/requestTasksUser";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const dispatch = useDispatch();
  const [tasks, setTasks] = useState(DEFAULT_DATA_TASKS);
  const stateTask = useSelector((state: boolean) => state);
  const [textTask, setTextTask] = useState("");
  const login = localStorage.getItem("userLogin");
  const navigate = useNavigate();

  const addNewTask = async () => {
    try {
      if (!login) throw new Error();
      const task = {
        login,
        checkBox: false,
        textTask: textTask,
      };

      const res = await apiRequestTasks("POST", task);

      if (res.status === 200) {
        setTextTask("");
        dispatch(setStateTask(!stateTask));
      } else {
        throw new Error();
      }
    } catch (err) {
      console.log(err);
    }
  };

  const toExite = () => {
    localStorage.setItem("userLogin", "");
    navigate("/");
  };

  useEffect(() => {
    const data = async () => {
      try {
        const res = await loadData();
        if (res) {
          dispatch(setDataTasks(res));
          setTasks(res);
        } else {
          throw new Error();
        }
      } catch (err) {
        console.log(err);
      }
    };
    data();
  }, [dispatch, stateTask]);

  return (
    <div>
      <div className="block-header-name-user">
        <p className="text-login">Пользователь: {login}</p>
        <Button variant="contained" color="error" onClick={toExite}>
          Выйти из аккаунта
        </Button>
      </div>
      <div className="main">
        <div className="blockAddNewTask">
          <TextField
            autoFocus={true}
            onChange={(e) => setTextTask(e.target.value)}
            id="standard-basic"
            variant="standard"
            sx={styles.blockInput}
            value={textTask}
          />
          <div className="icon">
            <AddBoxIcon sx={styles.buttonAddTask} onClick={addNewTask} />
          </div>
        </div>
        <div className="container-block-tasks">
          {tasks.map((item, index) => (
            <div key={`indexTask=${index}`}>
              <Task props={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;

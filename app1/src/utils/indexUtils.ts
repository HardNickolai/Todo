import { apiRequestTasks } from "api/requestTasksUser";
import { ITask } from "interfaces/interfaces";

export const loadData = async () => {
  const tasks: Array<ITask> = await apiRequestTasks("GET");
  const dataTasksUser = tasks.filter(
    (item) => item.login === localStorage.getItem("userLogin")
  );
  if (!tasks) {
    return false;
  } else {
    return dataTasksUser;
  }
};

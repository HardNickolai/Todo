import { URL_GET_TASKS, URL_POST_TASKS } from "constants/constants";
import { IDataTasks, IDataUsers, ITask } from "interfaces/interfaces";
import { buildParamsTasks } from "utils/apiRequestUtils";

export const apiRequestTasks = async (method: string, task?: ITask, id?: string) => {
  try {
    if (method === "GET") {
      const res = await fetch(URL_GET_TASKS, buildParamsTasks(method));
      if (res.status === 200) {
        const result: IDataTasks = await res.json();
        return result.data;
      } else {
        throw new Error();
      }
    } else if (method === "POST" && task) {
      const res = await fetch(URL_POST_TASKS, buildParamsTasks(method, task));
      if (res.status === 200) {
        const result: IDataUsers = await res.json();
        return result.data;
      } else {
        throw new Error();
      }
    } else if (method === "PUT" && task) {
      const res = await fetch(URL_POST_TASKS, buildParamsTasks(method, task));
      if (res.status === 200) {
        const result: IDataUsers = await res.json();
        return result.data;
      } else {
        throw new Error();
      }
    } else if (method === "DELETE" && id) {
      const res = await fetch(URL_POST_TASKS, buildParamsTasks(method, undefined, id));
      if (res.status === 200) {
        const result: IDataUsers = await res.json();
        return result.data;
      } else {
        throw new Error();
      }
    }
  } catch (err: any) {
    console.log(err);
    return err;
  }
};

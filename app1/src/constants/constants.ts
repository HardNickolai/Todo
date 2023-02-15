import { ITask } from "interfaces/interfaces";

export const URL_GET_USERS = "http://localhost:8000/users";
export const URL_CREATE_USER = "http://localhost:8000/createUser";
export const HEADERS = {
  "Content-Type": "application/json;charset=utf-8",
  "Access-Control-Allow-Origin": "*",
};

export const URL_GET_TASKS = "http://localhost:8001/tasks";
export const URL_POST_TASKS = "http://localhost:8001/task";
export const DEFAULT_DATA_TASKS: Array<ITask> = [
  {
    _id: "",
    login: "",
    checkBox: false,
    textTask: "",
    date: new Date(),
  },
];

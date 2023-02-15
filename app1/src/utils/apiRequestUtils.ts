import { HEADERS } from "constants/constants";
import { ITask, IUser } from "interfaces/interfaces";

export const buildParamsUsers = (method: string, user?: IUser) => {
  if (method === "GET") {
    return { method: "GET", headers: HEADERS };
  } else if (method === "POST") {
    return { method: "POST", headers: HEADERS, body: JSON.stringify(user) };
  }
};

export const buildParamsTasks = (method: string, task?: ITask, id?: string) => {
  if (method === "GET") {
    return { method: "GET", headers: HEADERS };
  } else if (method === "POST") {
    return { method: "POST", headers: HEADERS, body: JSON.stringify(task) };
  } else if (method === "PUT") {
    return { method: "PUT", headers: HEADERS, body: JSON.stringify(task) };
  } else if (method === "DELETE") {
    return { method: "DELETE", headers: HEADERS, body: JSON.stringify({ _id: id })};
  }
};

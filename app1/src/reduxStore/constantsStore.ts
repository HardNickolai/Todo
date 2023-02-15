import { IDataUserStore } from "interfaces/interfaces";

export const SET_LOGIN = "SET_LOGIN";
export const SET_DATATASKS_USER = "SET_DATATASKS_USER";
export const SET_STATE_TASK = "SET_STATE_TASK";

export const userState: IDataUserStore = {
  login: "",
  data: [],
  stateTask: false
};

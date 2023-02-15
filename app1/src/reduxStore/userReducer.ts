import { IActionStoreUser, ITask } from "interfaces/interfaces";
import {
  SET_DATATASKS_USER,
  SET_LOGIN,
  SET_STATE_TASK,
  userState,
} from "./constantsStore";

export const userReducer = (state = userState, action: IActionStoreUser) => {
  switch (action.type) {
    case SET_LOGIN:
      return { ...state, login: action.payload };
    case SET_DATATASKS_USER:
      return { ...state, data: action.payload };
    case SET_STATE_TASK:
      return { ...state, stateTask: action.payload };
    default:
      return state;
  }
};

export const setLogin = (payload: string) => ({ type: SET_LOGIN, payload });
export const setDataTasks = (payload: Array<ITask>) => ({
  type: SET_DATATASKS_USER,
  payload,
});
export const setStateTask = (payload: boolean) => ({
  type: SET_STATE_TASK,
  payload,
});

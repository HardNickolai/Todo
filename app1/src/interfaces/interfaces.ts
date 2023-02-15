export interface IDataUser {
  login: string;
  password: string;
  __v: number;
  _id: string;
}

export interface IDataUsers {
  data: Array<IDataUser>;
}

export interface IInnerPropsErrorLogin {
  error: string;
}

export interface IPropsErrorLogin {
  props: IInnerPropsErrorLogin;
}

export interface IInnerPropsNatifeeRegistr {
  stateNatifee: boolean;
}

export interface IPropsNatifeeRegistr {
  props: IInnerPropsNatifeeRegistr;
}

export interface IUser {
  login: string;
  password: string;
}

export interface ITask {
  _id?: string;
  login: string;
  checkBox: boolean;
  textTask: string;
  date?: Date;
}

export interface IDataTasks {
  data: Array<ITask>;
}

export interface IDataUserStore {
  login: string;
  data: Array<ITask>;
  stateTask: boolean;
}

export interface IStoreUser {
  user: IDataUserStore;
}

export interface IActionStoreUser {
  type: string;
  payload: string | Array<ITask>;
}

export interface IPropsTask {
  props: ITask;
}

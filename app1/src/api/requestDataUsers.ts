import { URL_CREATE_USER, URL_GET_USERS } from "constants/constants";
import { IDataUsers, IUser } from "interfaces/interfaces";
import { buildParamsUsers } from "utils/apiRequestUtils";

export const apiRequestUsers = async (method: string, user?: IUser) => {
  try {
    if (method === "GET") {
      const res = await fetch(URL_GET_USERS, buildParamsUsers(method));
      if (res.status === 200) {
        const result: IDataUsers = await res.json();
        return result.data;
      } else {
        throw new Error();
      }
    } else if (method === "POST" && user) {
      // Проверка на двойной клик регистрации // start
      const result = await fetch(URL_GET_USERS, buildParamsUsers("GET"));
      if (result.status === 200) {
        const data: IDataUsers = await result.json();
        if (!data) throw new Error();

        data.data.map((item) => {
          if (item.login === user.login) {
            throw new Error();
          } else {
            return true;
          }
        });
        //end
        const res = await fetch(URL_CREATE_USER, buildParamsUsers(method, user));
        if (res.status === 200) {
          const result: IDataUsers = await res.json();
          return result.data;
        } else {
          throw new Error();
        }
      }
    }
  } catch (err: any) {
    console.log(err);
    return err;
  }
};

import axios from "axios";
import { iUser } from "./types";
import {
  USER_REQUEST_FAIL,
  USER_REQUEST_FETCH,
  USER_REQUEST_SUCCESS,
} from "./userTypes";

export const userActionFetch = () => {
  return {
    type: USER_REQUEST_FETCH,
  };
};
export const userActionSuccess = (data: iUser[]) => {
  return {
    type: USER_REQUEST_SUCCESS,
    payload: data,
  };
};
export const userActionFail = (error: string) => {
  return {
    type: USER_REQUEST_FAIL,
    payload: error,
  };
};

export const onFetchUser = () => {
  return async function (dispatch: any) {
    try {
      dispatch(userActionFetch());
      const users = await axios.get<iUser[]>(
        "https://jsonplaceholder.typicode.com/users"
      );
      dispatch(userActionSuccess(users.data));
    } catch (error: any) {
      dispatch(userActionFail(error.message));
    }
  };
};

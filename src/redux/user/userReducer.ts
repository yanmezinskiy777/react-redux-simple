import { AnyAction } from "redux";
import { iUser } from "./types";
import {
  USER_REQUEST_FAIL,
  USER_REQUEST_FETCH,
  USER_REQUEST_SUCCESS,
} from "./userTypes";

const initialState: UserState = {
  data: [],
  loading: false,
  error: "",
};

export type UserState = {
  data: iUser[];
  loading: boolean;
  error: string;
};

const userReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case USER_REQUEST_FETCH:
      return {
        ...state,
        loading: true,
      };
    case USER_REQUEST_SUCCESS:
      return {
        error: "",
        data: action.payload,
        loading: false,
      };
    case USER_REQUEST_FAIL:
      return {
        data: [],
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default userReducer;

import { BUY_BOOK } from "./bookTypes";
import { AnyAction, Reducer } from "redux";
import { BookState } from "./types";

const initState = {
  numberOfBooks: 20,
};

const reducer: Reducer<BookState, AnyAction> = (state = initState, action)  => {
  switch (action.type) {
    case BUY_BOOK:
      return {
        ...state,
        numberOfBooks: state.numberOfBooks && state.numberOfBooks - 1,
      };
    default: return state
  }
};

export default reducer;

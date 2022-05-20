import { BUY_MAGAZINE } from "./magazineTypes";
import { AnyAction, Reducer } from "redux";
import { MagazineState } from "./types";

const initState = {
    numberOfMagazines: 30,
};

const reducer: Reducer<MagazineState, AnyAction> = (state = initState, action)  => {
  switch (action.type) {
    case BUY_MAGAZINE:
      return {
        ...state,
        numberOfMagazines: state.numberOfMagazines && state.numberOfMagazines - action.payload,
      };
    default: return state
  }
};

export default reducer;

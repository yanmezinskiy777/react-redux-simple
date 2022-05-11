import { createStore, combineReducers } from "redux"
import bookReducer from "./book/bookReducer";
import { BookState } from "./book/types";
import magzineReducer from "./magazine/magazineReducer";
import { MagazineState } from "./magazine/types";

export interface ApplicationState {
    book: BookState;
    magazine: MagazineState
  }

const reducer = combineReducers<ApplicationState>({
    book: bookReducer,
    magazine: magzineReducer
})

const store = createStore(reducer);

export type AppDispatch = typeof store.dispatch

export default store;

import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import bookReducer from "./book/bookReducer";
import { BookState } from "./book/types";
import magzineReducer from "./magazine/magazineReducer";
import userReducer, { UserState } from "./user/userReducer";
import { MagazineState } from "./magazine/types";

export interface ApplicationState {
  book: BookState;
  magazine: MagazineState;
  user: UserState;
}

const middleware = applyMiddleware(thunk, logger);

const reducer = combineReducers<ApplicationState>({
  book: bookReducer,
  magazine: magzineReducer,
  user: userReducer,
});

const store = createStore(reducer, middleware);

export type AppDispatch = typeof store.dispatch;

export default store;

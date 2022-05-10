import { createStore } from "redux"
import reducer from "./bookReducer";

const store = createStore(reducer);

export default store;

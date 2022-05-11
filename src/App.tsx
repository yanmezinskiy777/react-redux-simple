import { Provider } from "react-redux"
import store from "./redux/book/store"
import BooksContainer from './components/booksContainer';
import BooksHooksContainer from "./components/booksHooksContainer";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <BooksContainer/>
        <BooksHooksContainer/>
      </div>
    </Provider>
  );
}

export default App;

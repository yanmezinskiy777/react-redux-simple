import { Provider } from "react-redux"
import store from "./redux/book/store"
import BooksContainer from './components/booksContainer';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <BooksContainer/>
      </div>
    </Provider>
  );
}

export default App;

import { Provider } from "react-redux"
import store from "./redux/rootStore"
import BooksContainer from './components/booksContainer';
import BooksHooksContainer from "./components/booksHooksContainer";
import MagazineHooksContainer from "./components/magazineHooksContainer";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <BooksContainer/>
        <BooksHooksContainer/>
        <MagazineHooksContainer/> 
      </div>
    </Provider>
  );
}

export default App;

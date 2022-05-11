import { useSelector, useDispatch } from "react-redux"
import { onByBookAction } from "../redux/book/bookActions";

import { AppDispatch, ApplicationState } from "../redux/rootStore";

const BooksHooksContainer = () => {
  const numberOfBooks = useSelector((state: ApplicationState ) => state.book.numberOfBooks)
  const dispatch = useDispatch<AppDispatch>();
  const onBuyBook = () => dispatch(onByBookAction())
  return (
    <div>
      <h2>Number of books: {numberOfBooks}</h2>
      <button onClick={onBuyBook}>buy books</button>
    </div>
  )
}

export default BooksHooksContainer
import { useSelector, useDispatch } from "react-redux"
import { onByBookAction } from "../redux/book/bookActions";
import { AppDispatch } from "../redux/book/store";
import { BookState } from "../redux/book/types"

const BooksHooksContainer = () => {
  const numberOfBooks = useSelector((state: BookState ) => state.numberOfBooks)
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
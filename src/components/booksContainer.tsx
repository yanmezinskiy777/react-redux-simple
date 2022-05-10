import { FC } from "react";
import { connect, ConnectedProps } from "react-redux";
import { onByBookAction } from "../redux/book/bookActions";
import { BookState } from "../redux/book/types";

const BooksContainer: FC<Props> = ({ numberOfBooks , onBuyBook }) => {
  return (
    <div>
      <h2>Number of books: {numberOfBooks}</h2>
      <button onClick={onBuyBook}>buy books</button>
    </div>
  );
};

const mapStateToProps = (state: BookState) => {
  return {
    numberOfBooks: state && state.numberOfBooks
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    onBuyBook: () => dispatch(onByBookAction()),
  };
};

const connector = connect(mapStateToProps, mapDispatchToProps);
type Props = ConnectedProps<typeof connector>

export default connector(BooksContainer);

import { FC } from "react";
import { connect, ConnectedProps } from "react-redux";
import { onByBookAction } from "../redux/book/bookActions";
import { ApplicationState } from "../redux/rootStore";

const BooksContainer: FC<Props> = ({ numberOfBooks , onBuyBook }) => {
  return (
    <div>
      <h2>Number of books: {numberOfBooks}</h2>
      <button onClick={onBuyBook}>buy books</button>
    </div>
  );
};

const mapStateToProps = (state: ApplicationState) => {
  return {
    numberOfBooks: state && state.book.numberOfBooks
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

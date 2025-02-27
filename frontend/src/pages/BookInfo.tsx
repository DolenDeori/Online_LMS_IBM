import { books } from "@/constants";
import { useParams } from "react-router";

const BookInfo = () => {
  const { id } = useParams();

  const book = books.find((book) => book.id.toString() === id);
  console.log("The book is", book);

  if (!book) {
    return <div>Book not found</div>;
  }

  return <div>{book.title}</div>;
};

export default BookInfo;

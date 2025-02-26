import { books } from "@/constants";

const BookInfo = ({
  bookId,
  setBookId,
}: {
  bookId: number;
  setBookId: any;
}) => {
  return (
    <div className="p-4 bg-white h-full overflow-y-scroll font-funnel border-l-2">
      <div>
        <div className=" border border-blue-200 cursor-pointer hover:bg-blue-800 rounded-full h-8 w-8 flex justify-center items-center hover:text-white duration-100">
          <i className="bi bi-x text-2xl m-0" onClick={() => setBookId(0)}></i>
        </div>
        <h1 className="text-2xl font-semibold mt-5">Book Info</h1>
      </div>
      {bookId === 0 ? (
        <div className="text-center mt-6">
          <p className="text-sm">Please select a book to see the details</p>
        </div>
      ) : (
        <div className="mt-6">
          {books
            .filter((book) => book.id === bookId)
            .map((book) => (
              <div key={book.id}>
                <div className="flex gap-4">
                  <img
                    src={book.coverImage}
                    alt="book cover image"
                    className="h-[200px]"
                  />
                  <div>
                    <h2 className="font-semibold text-lg">{book.title}</h2>
                    <p className="text-sm">{book.author}</p>
                    <p className="text-sm">{book.publishDate}</p>
                    <p className="text-sm">{book.pages} pages</p>
                    <p className="text-sm">
                      {book.available ? "Available" : "Not Available"}
                    </p>
                    <p className="text-sm">Rating: {book.starReview}</p>
                  </div>
                </div>
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default BookInfo;

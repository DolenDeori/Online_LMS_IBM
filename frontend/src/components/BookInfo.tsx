import { books } from "@/constants";

const BookInfo = ({ bookId }: { bookId: number }) => {
  return (
    <div className="p-4">
      <h1>Book Info</h1>
      <div className="mt-6">
        {books
          .filter((book) => book.id === bookId)
          .map((book) => (
            <div key={book.id}>
              <div className="flex gap-4">
                <img
                  src={book.coverImage}
                  alt="book cover image"
                  className="h-[200px] w-[150px] object-cover object-top"
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
    </div>
  );
};

export default BookInfo;

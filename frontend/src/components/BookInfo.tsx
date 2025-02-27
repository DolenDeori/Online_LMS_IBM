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
                    className="h-[200px] rounded-md"
                  />
                  <div className="flex flex-col justify-between">
                    <div>
                      {" "}
                      <h2 className="font-semibold text-lg/tight">
                        {book.title}
                      </h2>
                      <p className="text-sm">{book.author}</p>
                      <p className="text-sm mt-2">{book.publishDate}</p>
                      <p className="text-sm">{book.pages} pages</p>
                      <p className="text-sm">
                        {book.available ? "Available" : "Not Available"}
                      </p>
                      <p className="text-sm">Rating: {book.starReview}</p>
                    </div>
                    <button className="p-1 bg-blue-800 hover:bg-blue-700 duration-200 text-white rounded-md cursor-pointer px-4 text-sm">
                      Borrow Book
                    </button>
                  </div>
                </div>
                <div className="mt-4">
                  <h1 className="font-semibold text-xl">About the book</h1>
                  <p className="mt-2 text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Doloribus eligendi deleniti amet ipsam alias. Fuga quas
                    tempore mollitia reprehenderit nemo animi explicabo repellat
                    saepe, accusamus beatae praesentium sit aspernatur eos nihil
                    veritatis quaerat minima dolore dolorem ratione? Natus
                    mollitia aperiam nulla quam provident eveniet dicta sed nam
                    soluta dolorum quos iure, ea pariatur vel beatae praesentium
                    aliquid eius facilis illum totam? Accusantium accusamus vel
                    vero deserunt voluptate nostrum impedit ut libero nam fuga
                    fugiat illum, earum quia. Perspiciatis quibusdam officia
                    autem, quaerat excepturi vitae repellat numquam ea aliquid
                    rerum velit corporis reiciendis, aperiam voluptate iste vel,
                    totam distinctio porro est.
                  </p>
                </div>
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default BookInfo;

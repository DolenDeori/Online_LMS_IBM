import { books } from "@/constants";
import { useParams } from "react-router";
import Home from "./Home";

const BookInfo = () => {
  const { id } = useParams();

  const book = books.find((book) => book.id.toString() === id);

  if (!book) {
    return <div>Book not found</div>;
  }

  return (
    <main>
      {/* <SearchNav /> */}
      <section className="p-4 flex justify-center w-[50%]  m-auto items-center rounded-2xl font-funnel">
        <div className="lg:flex justify-center gap-8 w-full">
          {" "}
          <div className="flex-1">
            <img
              src={book.coverImage}
              alt={`${book.title} - Book Cover Image`}
              className="rounded-xl"
            />
          </div>
          <div className="flex-1 flex flex-col justify-between gap-4 p-2">
            <div className="flex flex-col h-full gap-8">
              {/* Section 1 */}
              <div>
                {" "}
                <h1 className="text-3xl font-bold">{book.title}</h1>
                <h2>{book.author}</h2>
              </div>

              {/* Section 2 */}
              <div>
                <p className="text-sm text-gray-500">
                  {book.publishDate} • Dolen Deori Publications
                </p>
                <div className="flex gap-2 justify-between items-center mt-4">
                  <div className="flex-col justify-between items-center gap-1">
                    <div className="flex gap-1 items-center justify-center">
                      {" "}
                      <p> {book.starReview}</p>
                      <i className="bi bi-star-fill text-xs"></i>
                    </div>
                    <p className="text-xs text-gray-500">Rating</p>
                  </div>

                  <div className="h-6 w-[1px] bg-gray-300"></div>

                  <div className="flex-col justify-between items-center gap-1">
                    <div className="flex items-center justify-center">
                      {" "}
                      <p
                        className={`${book.available ? "text-green-500" : ""}`}
                      >
                        {" "}
                        {book.available ? "Available" : "Not Available"}
                      </p>
                    </div>
                    <p className="text-xs text-gray-500">Availability</p>
                  </div>

                  <div className="h-6 w-[1px] bg-gray-300"></div>

                  <div className="flex-col justify-between items-center gap-1">
                    <div className="flex gap-1 items-center justify-center">
                      {" "}
                      <p> {book.pages}</p>
                    </div>
                    <p className="text-xs text-gray-500">Pages</p>
                  </div>
                </div>
              </div>
              {/* Section 3 */}
              <div>
                <h1 className="flex items-center gap-4 cursor-pointer text-xl font-bold">
                  About this book <i className="bi bi-arrow-right"></i>
                </h1>
                <p className=" line-clamp-4 mt-2">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id
                  quia labore, atque animi mollitia magni ducimus, praesentium
                  laborum corporis odio commodi nemo, tenetur eveniet facere
                  architecto illum vero dolorum autem quaerat minima nobis!
                  Minima commodi quasi natus eum maxime rem dignissimos harum
                  similique! Ipsa veritatis ea quaerat rem magnam sequi odio
                  aperiam dignissimos excepturi ut qui cum ullam adipisci fugiat
                  expedita architecto rerum natus, quae itaque ab aliquam.
                  Impedit doloribus harum odit aliquid, tenetur rem iure
                  eligendi debitis nam nostrum soluta dolorem numquam eos error.
                  Corporis repellat incidunt doloremque nostrum! Excepturi,
                  provident delectus fuga quas et recusandae consequuntur sint
                  ex?
                </p>
              </div>
            </div>
            <button className="bg-blue-800 text-white p-2 rounded-full cursor-pointer">
              Borrow Book
            </button>
          </div>
        </div>
      </section>
      <section className="mt-8">
        <Home />
      </section>
    </main>
  );
};

export default BookInfo;

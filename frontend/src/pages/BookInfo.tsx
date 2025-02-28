import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Home from "./Home";

interface Book {
  _id: string;
  title: string;
  author: string;
  publishDate: string;
  pages: number;
  available: boolean;
  starReview: number;
  coverImage: string;
}

const BookInfo = () => {
  const [showNavLink, setShowNavLink] = useState<string | null>(null);
  const navigate = useNavigate();
  const { id } = useParams();
  const [book, setBook] = useState<Book | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:5500/api/v1/books/${id}`) 
      .then((res) => res.json())
      .then((data) => {
        setBook(data.data); 
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching book details:", err);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <div className="text-center mt-4">Loading book details...</div>;
  }

  if (!book) {
    return <div className="text-center mt-4">Book not found</div>;
  }

  //  Convert publishDate to a readable format
  const formattedDate = book.publishDate
    ? new Date(book.publishDate).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "Unknown Date";

  return (
    <main>
      <section className="p-4 flex justify-center w-[50%]  m-auto items-center rounded-2xl font-funnel">
        <div className="lg:flex justify-center gap-8 w-full">
          <div className="flex-1">
            <img
              src={book.coverImage || "https://via.placeholder.com/200"}
              alt={`${book.title || "Unknown"} - Book Cover Image`}
              className="rounded-xl"
              onError={(e) => {
                (e.target as HTMLImageElement).src = "https://via.placeholder.com/200";
              }}
            />
          </div>
          <div className="flex-1 flex flex-col justify-between gap-4 p-2">
            <div className="flex flex-col h-full gap-8">
              {/* Book Title and Author */}
              <div>
                <h1 className="text-3xl font-bold">{book.title || "Unknown Title"}</h1>
                <h2>{book.author || "Unknown Author"}</h2>
              </div>

              {/* Book Details */}
              <div>
                <p className="text-sm text-gray-500">
                  {formattedDate} • Dolen Deori Publications
                </p>
                <div className="flex gap-2 justify-between items-center mt-4">
                  <div className="flex-col justify-between items-center gap-1">
                    <div className="flex gap-1 items-center justify-center">
                      <p>{book.starReview ? book.starReview.toFixed(2) : "N/A"}</p>
                      {book.starReview !== undefined ? (
                        <i className="bi bi-star-fill text-xs text-yellow-500"></i>
                      ) : (
                        <p className="text-xs text-gray-500">No Rating</p>
                      )}
                    </div>
                    <p className="text-xs text-gray-500">Rating</p>
                  </div>

                    <div className="h-6 w-[1px] bg-gray-300"></div>

                  <div className="flex-col justify-between items-center gap-1">
                    <div className="flex items-center justify-center">
                      <p
                        className={`${
                          book.available ? "text-green-500" : "text-red-500"
                        }`}
                      >
                        {book.available ? "Available" : "Not Available"}
                      </p>
                    </div>
                    <p className="text-xs text-gray-500">Availability</p>
                  </div>

                    <div className="h-6 w-[1px] bg-gray-300"></div>

                  <div className="flex-col justify-between items-center gap-1">
                    <div className="flex gap-1 items-center justify-center">
                      <p>{book.pages || "N/A"}</p>
                    </div>
                    <p className="text-xs text-gray-500">Pages</p>
                  </div>
                </div>
              </div>

              {/* About the Book */}
              <div>
                <h1 className="flex items-center gap-4 cursor-pointer text-xl font-bold">
                  About this book <i className="bi bi-arrow-right"></i>
                </h1>
                <p className="line-clamp-4 mt-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit...
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
        <Home home_title="You may also like" />
      </section>
    </main>
  );
};

export default BookInfo;

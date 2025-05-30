import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import Home from "./Home";
import axios from "axios";

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

const GET_BORROWED_BOOK = import.meta.env.VITE_API_BORROWED_BOOKS_URL;

const BookInfo = ({ darkMode }: { darkMode: boolean }) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [book, setBook] = useState<Book | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [borrowedBooks, setBorrowedBooks] = useState<string[]>([]);

  const getBorrowdBooks = async () => {
    try {
      const user = JSON.parse(localStorage.getItem("user") || "{}");
      if (!user?._id) return;

      const res = await axios.get(`${GET_BORROWED_BOOK}/${user?._id}`);
      const bookIDs = res.data.map((info: any) => info.book_id._id);
      setBorrowedBooks(bookIDs);
    } catch (error) {
      console.error("Error fetching borrowed books: ", error);
    }
  };

  useEffect(() => {
    getBorrowdBooks();
  }, []);

  // function to check if the given book ID is in the borrwed Books List or not
  const isBorrowed = (bookId: string): boolean => {
    return borrowedBooks.includes(bookId);
  };

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

  // This function will handle the borrowing of book.
  const handleBookBorrow = () => {
    const token = localStorage.getItem("token");
    const user = JSON.parse(localStorage.getItem("user") || "{}");

    if (!token) {
      localStorage.setItem("lastAttemptedUrl", location.pathname);
      navigate("/auth/signin");
      return;
    }

    fetch("http://localhost:5500/api/v1/books/borrow", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        user_id: user._id,
        book_id: book?._id,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message === "Book borrowed successfully") {
          alert("Book borrowed successfully!");
          navigate("/profile"); // Redirect to profile after borrowing
        } else {
          alert(data.message);
        }
      })
      .catch((error) => {
        console.error("Error borrowing book:", error);
        alert("Failed to borrow book. Try again.");
      });
  };

  // This function will handle the back button.
  const handleBackButton = () => {
    const lastVisitedUrl = localStorage.getItem("lastVisitedUrl");
    if (lastVisitedUrl) {
      navigate(lastVisitedUrl);
      localStorage.removeItem("lastVisitedUrl");
    } else {
      navigate("/");
    }
  };

  return (
    <main
      className={`${darkMode ? "bg-gray-950" : "bg-white"} py-8 duration-200`}
    >
      <section className="p-4 lg:flex justify-center md:w-[70%] lg:w-[50%] gap-4 m-auto rounded-2xl font-funnel">
        <button
          onClick={handleBackButton}
          className={` ${
            darkMode ? "hover:bg-gray-800" : "hover:bg-gray-200"
          } h-12 w-13 rounded-full flex justify-center items-center cursor-pointer duration-200`}
        >
          <i
            className={`${
              darkMode ? "text-white" : "text-black"
            } bi bi-arrow-left text-xl`}
          ></i>
        </button>
        <div
          className={`${
            darkMode ? "bg-gray-800" : "bg-gray-100"
          } lg:flex justify-center gap-8 w-full  p-2 rounded-2xl duration-200`}
        >
          <div className="flex-1">
            <img
              src={book.coverImage || "https://via.placeholder.com/200"}
              alt={`${book.title || "Unknown"} - Book Cover Image`}
              className="rounded-xl md:h-full w-full"
              onError={(e) => {
                (e.target as HTMLImageElement).src =
                  "https://via.placeholder.com/200";
              }}
            />
          </div>
          <div className="flex-1 flex flex-col justify-between gap-4 p-2">
            <div className="flex flex-col h-full gap-8">
              {/* Book Title and Author */}
              <div>
                <h1
                  className={`${
                    darkMode ? "text-white" : "text-black"
                  } text-3xl font-bold`}
                >
                  {book.title || "Unknown Title"}
                </h1>
                <h2 className={`${darkMode ? "text-white" : "text-black"}`}>
                  {book.author || "Unknown Author"}
                </h2>
              </div>

              {/* Book Details */}
              <div>
                <p className="text-sm text-gray-500">
                  {formattedDate} • Dolen Deori Publications
                </p>
                <div className="flex gap-2 justify-between items-center mt-4">
                  <div className="flex-col justify-between items-center gap-1">
                    <div className="flex gap-1 items-center justify-center text-center">
                      <p
                        className={`${darkMode ? "text-white" : "text-black"}`}
                      >
                        {book.starReview ? book.starReview.toFixed(2) : "N/A"}
                      </p>
                      {book.starReview !== undefined ? (
                        <i className="bi bi-star-fill text-xs text-yellow-500"></i>
                      ) : (
                        <p className="text-xs text-gray-500">No Rating</p>
                      )}
                    </div>
                    <p className="text-xs text-gray-500">Rating</p>
                  </div>

                  <div className="h-6 w-[1px] bg-gray-300"></div>

                  <div className="flex-col justify-between items-center gap-1 text-center">
                    <p
                      className={`${
                        book.available ? "text-green-500" : "text-red-500"
                      }`}
                    >
                      {book.available ? "Available" : "Not Available"}
                    </p>
                    <p className="text-xs text-gray-500">Availability</p>
                  </div>

                  <div className="h-6 w-[1px] bg-gray-300"></div>

                  <div className="flex-col justify-between items-center gap-1 text-center">
                    <p className={`${darkMode ? "text-white" : "text-black"}`}>
                      {book.pages || "N/A"}
                    </p>
                    <p className="text-xs text-gray-500">Pages</p>
                  </div>
                </div>
              </div>

              {/* About the Book */}
              <div>
                <h1
                  className={`${
                    darkMode
                      ? "text-white font-semibold"
                      : "text-black font-bold"
                  } flex items-center gap-4 cursor-pointer text-xl`}
                >
                  About this book <i className="bi bi-arrow-right"></i>
                </h1>
                <p
                  className={`${
                    darkMode ? "text-white" : "text-black"
                  } line-clamp-3 mt-2`}
                >
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Adipisci minus possimus nihil temporibus explicabo, quis
                  facilis ducimus inventore fugit iste beatae neque consequatur
                  vel architecto voluptates ex
                </p>
              </div>
            </div>
            <div className="flex gap-0.5  ">
              {isBorrowed(id!) ? (
                <button
                  className="bg-blue-800 text-white p-2 px-8 rounded-l-3xl rounded-r-sm cursor-pointer"
                  onClick={() => navigate(`/read/book/${id}`)}
                >
                  Read Now
                </button>
              ) : (
                <button
                  className="bg-blue-800 text-white p-2 px-8 rounded-l-3xl rounded-r-sm cursor-pointer"
                  onClick={handleBookBorrow}
                >
                  Borrow Book
                </button>
              )}
              <button className="bg-blue-800 text-white px-4 rounded-r-3xl rounded-l-sm cursor-pointer">
                <i className="bi bi-bookmark"></i>
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-8">
        <Home home_title="You may also like" darkMode={darkMode} />
      </section>
    </main>
  );
};

export default BookInfo;

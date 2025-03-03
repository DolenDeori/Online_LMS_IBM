import { images } from "@/constants";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";

const BORROWED_BOOKS_API_URL = "http://localhost:5500/api/v1/books/borrowed";

interface User {
  _id: string;
  name: string;
  email: string;
}

interface BorrowedBook {
  _id: string;
  book_id: {
    _id: string;
    title: string;
    author: string;
    bookPdf: string;
    name: string;
  };
  returndate: string;
}

const Profile = ({ darkMode }: { darkMode: boolean }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState<User | null>(null);
  const [borrowedBooks, setBorrowedBooks] = useState<BorrowedBook[]>([]);

  useEffect(() => {
    const userToken = localStorage.getItem("token");
    const storedUser = localStorage.getItem("user");

    if (!userToken || !storedUser) {
      navigate("/auth/signin");
      return;
    }

    try {
      setUser(JSON.parse(storedUser));
    } catch (error) {
      console.error("Error parsing user data:", error);
      navigate("/auth/signin");
    }
  }, [navigate]);

  // Fetch Borrowed Books
  useEffect(() => {
    if (!user) return; // Ensure user is loaded before fetching
    fetch(`http://localhost:5500/api/v1/books/borrowed/${user._id}`)
      .then((res) => res.json())
      .then((data) => {
        setBorrowedBooks(data);
      })
      .catch((err) => {
        console.error("Error fetching borrowed books:", err);
      });
  }, [user]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    alert("Logged out successfully!");
    navigate("/auth/signin");
  };

  // Handle read request for the borrowed book
  const handleBookRead = (bookId: string) => {
    navigate(`/read/book/${bookId}`);
  };

  // Handle the delete remove requiest if user don't what the borrowed book
  const handleRemoveBook = async (bookId: string) => {
    try {
      const res = await axios.delete(
        `${BORROWED_BOOKS_API_URL}/${user?._id}/${bookId}`,
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      );

      if (res.status === 200) {
        alert("Book removed successfully!");
        setBorrowedBooks((prevBooks) =>
          prevBooks.filter((book) => book.book_id._id !== bookId)
        );
      }
    } catch (error) {
      console.error("Error removing book:", error);
      alert("Failed to remove book.");
    }
  };

  // Function that can convert the date time to day left
  function daysLeft(targetDate: string): string {
    const now: Date = new Date();
    const target: Date = new Date(targetDate);

    // Calculate the difference in milliseconds
    const diff: number = target.getTime() - now.getTime();

    // Convert milliseconds to days
    const daysRemaining: number = Math.ceil(diff / (1000 * 60 * 60 * 24));

    // Return formatted message
    return daysRemaining > 0
      ? `${daysRemaining} day(s) left`
      : "Time has passed!";
  }

  return (
    <div
      className={`${
        darkMode ? "bg-gray-950 text-white" : "bg-white text-black"
      } flex h-svh duration-200 py-16 md:py-4`}
    >
      <div className="h-svh w-full flex-2 font-funnel">
        <div className="flex flex-col items-center pb-8">
          <div className="border-blue-800 h-16 w-16 flex justify-center items-center mt-8 rounded-full bg-blue-300">
            <img src={images.demo_profile_1} alt="" className="rounded-full" />
          </div>
          <h1 className="font-semibold mt-2 text-xl">
            {user?.name || "Unknown User"}
          </h1>
          <p>{user?.email || "No email found"}</p>
          <div className="flex">
            <button className="p-2 bg-blue-800 mt-5 ml-4 rounded-full px-4 text-white cursor-pointer">
              Edit Profile
            </button>
            <button
              className="p-2 bg-red-800 mt-5 ml-4 rounded-full px-4 text-white cursor-pointer"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        </div>

        {/* ---------------------- Profile Books Section ---------------- */}
        <div className="mt-8 px-8 py-8">
          <h1 className="font-bold text-3xl mb-4">My Books</h1>
          <p>Current Holding: {borrowedBooks.length} / 10 Books</p>
          <div
            className={`mt-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 width-full duration-200 rounded-xl relative`}
          >
            {borrowedBooks.map((books) => (
              <div
                key={books._id}
                className={`${
                  darkMode
                    ? "bg-gray-900 hover:bg-gray-800"
                    : "bg-gray-100 hover:bg-gray-200"
                } md:flex justify-between gap-2 items-center p-4 rounded-xl`}
              >
                <div className="flex-1">
                  <h1 className="text-lg font-semibold line-clamp-1">
                    {books.book_id.name}
                  </h1>
                  <p
                    className={`${
                      darkMode ? "text-gray-400" : "text-gray-600"
                    } text-sm`}
                  >
                    {books.book_id.author}
                  </p>
                  <div className="md:flex md:justify-between">
                    <p className="text-xs mt-5">
                      Book Due:{" "}
                      <span className="text-green-500">
                        {daysLeft(books.returndate)}
                      </span>
                    </p>
                    <div className="flex items-center gap-1">
                      <button
                        className="bg-gray-500 cursor-pointer px-4 py-2 hover:bg-blue-800 text-sm rounded-l-3xl rounded-sm text-white"
                        onClick={() => handleBookRead(books.book_id._id)}
                      >
                        Read Book
                      </button>
                      <button
                        className={`bg-gray-500 cursor-pointer px-3 py-1.5 hover:bg-red-800 rounded-sm rounded-r-3xl text-white`}
                        onClick={() => handleRemoveBook(books.book_id._id)}
                      >
                        <i className="bi bi-trash"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button
            className="p-2 bg-blue-800 mt-5 rounded-full px-4 text-white cursor-pointer"
            onClick={() => navigate("/")}
          >
            Explore More Books
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;

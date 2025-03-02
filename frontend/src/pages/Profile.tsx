import { images } from "@/constants";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

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
    name:string;
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

  const handleBookRead = (bookPdf: string) => {
    window.open(bookPdf, "_blank"); // Open PDF in a new tab
  };

  return (
    <div
      className={`${
        darkMode ? "bg-gray-950 text-white" : "bg-white text-black"
      } flex h-svh duration-200`}
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
            <button
              className="p-2 bg-blue-800 mt-5 ml-4 rounded-full px-4 text-white cursor-pointer"
              onClick={handleLogout}
            >
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

        <div className="mt-8 px-8 py-8">
          <p>Current Holding: {borrowedBooks.length} / 20 Books</p>

          <div
            className={`${
              darkMode ? "bg-gray-900" : "bg-gray-100"
            } mt-3 width-full overflow-x-scroll duration-200 scrollbar-hidden `}
          >
            <table className="table-auto border-collapse w-full rounded-2xl">
              <thead>
                <tr>
                  <th className=" py-4 p-2">Book Id</th>
                  <th className=" py-4 p-2">Books</th>
                  <th className=" py-4 p-2">Book Due</th>
                  <th className=" py-4 p-2">Read Book</th>
                </tr>
              </thead>
              <tbody className="border-t border-gray-600">
                {borrowedBooks.map((borrowedBook, index) => (
                  <tr
                    className={`${
                      darkMode ? "hover:bg-gray-800" : "hover:bg-gray-200"
                    } `}
                    key={borrowedBook._id}
                  >
                    <td className="p-2 text-center">{index + 1}</td>
                    <td className="p-2">
                      <div>
                        {/* <p className="font-semibold">{borrowedBook.book_id.title}</p> */}
                        <p className={`text-gray-600 text-sm`}>
                          {borrowedBook.book_id.name}
                        </p>
                      </div>
                    </td>
                    <td className="p-2 text-center">
                      {new Date(borrowedBook.returndate).toDateString()}
                    </td>
                    <td className="p-2 text-center">
                      <button
                        onClick={() => handleBookRead(borrowedBook.book_id.bookPdf)}
                        className="p-1 px-2 bg-blue-900 text-white cursor-pointer rounded-sm"
                      >
                        Read
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
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

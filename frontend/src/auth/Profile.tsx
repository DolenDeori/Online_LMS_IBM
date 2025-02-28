import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

interface User {
  name: string;
  email: string;
}

interface Book {
  _id: string;
  title: string;
  author: string;
}

const Profile = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<User | null>(null);
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const userToken = localStorage.getItem("token");
    const storedUser = localStorage.getItem("user");

    console.log("User Token:", userToken);
    console.log("Stored User Data:", storedUser);

    if (!userToken || !storedUser) {
      navigate("/auth/signin"); // Redirect if user is not authenticated
      return;
    }

    try {
      setUser(JSON.parse(storedUser)); // Parse user data correctly
    } catch (error) {
      console.error("Error parsing user data:", error);
      navigate("/auth/signin"); // Redirect if user data is corrupted
    }
  }, [navigate]);

  // Fetch books
  const fetchBooks = async () => {
    try {
      const response = await fetch("http://localhost:5500/api/v1/books");
      const data = await response.json();
      setBooks(data.slice(0, 5));
    } catch (error) {
      console.error("Error fetching books:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    alert("Logged out successfully!");
    navigate("/auth/signin");
  };
  return (
    <div className="flex h-svh">
      <div className="h-svh w-full flex-2 font-funnel">
        <div className="flex flex-col items-center pb-8">
          <div className="border-6 border-blue-800 h-16 w-16 flex justify-center items-center mt-8 rounded-full bg-blue-300">
            <h1 className="font-bold">
              {user?.name?.charAt(0).toUpperCase() || "U"}
            </h1>
          </div>
          <h1 className="font-semibold mt-2 text-xl">
            {user?.name || "Unknown User"}
          </h1>
          <p>{user?.email || "No email found"}</p>
        </div>

        <div className="mt-8 px-8">
          <p>Current Holding: {books.length} / 20 Books</p>

          <div className="mt-3 width-full overflow-x-scroll">
            {loading ? (
              <p>Loading books...</p>
            ) : (
              <table className="table-auto border-collapse border w-full">
                <thead>
                  <tr>
                    <th className="border p-2">Book Id</th>
                    <th className="border p-2">Book Name</th>
                    <th className="border p-2">Book Author</th>
                    <th className="border p-2">Book Due</th>
                    <th className="border p-2">View</th>
                  </tr>
                </thead>
                <tbody>
                  {books.map((book) => (
                    <tr key={book._id}>
                      <td className="border p-2">{book._id}</td>
                      <td className="border p-2">{book.title}</td>
                      <td className="border p-2">{book.author}</td>
                      <td className="border p-2">12 March 2025</td>
                      <td className="border p-2">
                        <a
                          href={`/home/books/${book._id}`}
                          className="underline text-blue-800"
                        >
                          View
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>

          <button
            className="p-2 bg-blue-800 mt-5 rounded-full px-4 text-white cursor-pointer"
            onClick={() => navigate("/")}
          >
            Explore More Books
          </button>
          <button
            className="p-2 bg-red-800 mt-5 ml-4 rounded-full px-4 text-white cursor-pointer"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;

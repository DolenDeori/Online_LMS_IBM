import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

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

const Home = ({
  home_title,
  darkMode,
}: {
  home_title: string;
  darkMode: boolean;
}) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    setLoading(true); // Start loading state
    fetch("http://localhost:5500/api/v1/books")
      .then((res) => res.json())
      .then((data) => {
        setBooks(data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching books:", err);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <main className={` h-svh font-funnel py-20 md:py-8 lg:py-4`}>
        <section
          className={`p-4 ${
            darkMode ? "bg-gray-950" : "bg-white"
          } duration-200`}
        >
          <h1
            className={`${
              darkMode ? "text-white" : "text-black"
            } text-xl font-semibold`}
          >
            {home_title}
          </h1>

          <div className="lg:columns-6 md:columns-3 sm:columns-2 md:space-y-12 space-y-6 lg:space-y-8 mt-5 mb-5">
            {loading ? (
              <div className="flex justify-center items-center h-32">
                <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-gray-500"></div>
              </div>
            ) : books.length > 0 ? (
              books.map((book) => (
                <div
                  key={book._id} // Use _id instead of id
                  className="cursor-pointer"
                  onClick={() => navigate(`/home/books/${book._id}`)}
                >
                  <div className="bg-black rounded-xl overflow-hidden relative">
                    <img
                      src={book.coverImage}
                      alt="book cover image"
                      className="w-full rounded-xl hover:opacity-70"
                    />
                  </div>
                  <div>
                    <h2
                      className={`${darkMode ? "text-white" : "text-gray-800"}`}
                    >
                      {book.title}
                    </h2>
                    <p
                      className={`flex items-center gap-1 text-sm ${
                        darkMode ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      {book.starReview}{" "}
                      <i className="bi bi-star-fill text-xs"></i>
                    </p>
                  </div>
                </div>
              ))
            ) : (
              <p className={`${darkMode ? "text-white" : "text-black"}`}>
                No books Found
              </p>
            )}
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;

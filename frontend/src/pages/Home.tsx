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

const Home = () => {
  const navigate = useNavigate();
  const [books, setBooks] = useState<Book[]>([]); 

  useEffect(() => {
    fetch("http://localhost:5500/api/v1/books") 
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched Books:", data); 
        setBooks(data.data); 
      })
      .catch((err) => console.error("Error fetching books:", err));
}, []);


  return (
    <>
      <main className="h-svh font-funnel">
        <section className="p-4">
          <h1 className="text-xl font-semibold">Our Book Collections</h1>

          <div className="lg:columns-6 md:columns-3 md:space-y-12 space-y-6 lg:space-y-12 mt-5 mb-5">
            {books.length > 0 ? (
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
                    <h2 className="text-gray-800">{book.title}</h2>
                    <p className="flex items-center gap-1 text-sm text-gray-600">
                      {book.starReview} <i className="bi bi-star-fill text-xs"></i>
                    </p>
                  </div>
                </div>
              ))
            ) : (
              <p>Loading books...</p>
            )}
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;

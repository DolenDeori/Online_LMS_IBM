import { books } from "@/constants";
import { NavLink, useNavigate } from "react-router";
import SearchNav from "@/components/SearchNav";

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <SearchNav />
      <main className="h-svh font-funnel">
        <section className="p-4">
          <h1 className="text-xl font-semibold">Our Book Collections</h1>

          <div className="lg:columns-6 md:columns-3 md:space-y-12 space-y-6 lg:space-y-12 mt-5 mb-5">
            {books.map((book) => (
              <div
                key={book.id}
                className="cursor-pointer"
                onClick={() => navigate(`/books/${book.id}`)}
              >
                <div className="bg-black rounded-xl overflow-hidden relative">
                  <img
                    src={book.coverImage}
                    alt="book cover image"
                    className=" w-full rounded-xl hover:opacity-70"
                  />
                </div>
                <div>
                  <h2 className="text-gray-800">{book.title}</h2>
                  <p className="flex items-center gap-1 text-sm text-gray-600">
                    {book.starReview}{" "}
                    <i className="bi bi-star-fill text-xs"></i>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;

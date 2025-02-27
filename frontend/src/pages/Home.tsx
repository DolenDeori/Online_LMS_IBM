import { books } from "@/constants";
import { useNavigate } from "react-router";
import SearchNav from "@/components/SearchNav";

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <SearchNav />
      <main className="h-svh font-funnel">
        <section className="p-4">
          <h1 className="text-xl font-semibold">Our Book Collections</h1>

          <div className="lg:columns-6 md:columns-3 md:space-y-12 space-y-6 lg:space-y-6 mt-5 mb-5">
            {books.map((book) => (
              <div
                key={book.id}
                className="cursor-pointer"
                onClick={() => navigate(`/books/${book.id}`)}
              >
                <div>
                  <img
                    src={book.coverImage}
                    alt="book cover image"
                    className=" w-full rounded-md"
                  />
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

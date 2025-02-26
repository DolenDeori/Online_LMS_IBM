import SearchNav from "@/components/SearchNav";
import { books } from "@/constants";

const Home = ({ setBookId }: { setBookId: any }) => {
  return (
    <main className=" h-svh overflow-y-scroll font-funnel relative">
      <SearchNav />
      <section className="p-4 mt-4">
        <h1 className="text-xl font-semibold">Our Book Collections</h1>

        <div className="lg:columns-6 md:columns-3 md:space-y-12 space-y-6 lg:space-y-8 mt-5 mb-5">
          {books.map((book) => (
            <div
              key={book.id}
              className="cursor-pointer"
              onClick={() => setBookId(book.id)}
            >
              <div>
                <img
                  src={book.coverImage}
                  alt="book cover image"
                  className=" w-full rounded-md"
                />
                <h2 className="font-semibold text-sm">{book.title}</h2>
                <p className="text-xs">{book.author}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Home;

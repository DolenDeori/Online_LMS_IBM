import SearchNav from "@/components/SearchNav";
import { books } from "@/constants";

const Home = ({ setBookId }: { setBookId: any }) => {
  return (
    <main className="bg-blue-100 h-svh overflow-y-scroll font-funnel relative">
      <SearchNav />
      <section className="p-4 mt-4">
        <h1 className="text-xl font-semibold">Our Book Collections</h1>

        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6 mt-4 gap-y-8">
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
                  className="p-1 border-2 w-full object-cover object-top"
                />
              </div>
              <h2 className="font-semibold text-sm">{book.title}</h2>
              <p className="text-xs">{book.author}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Home;

import SearchNav from "@/components/SearchNav";
import { books } from "@/constants";

const Home = ({ setBookId }: { setBookId: any }) => {
  return (
    <main className="bg-blue-200 h-svh overflow-y-scroll">
      <SearchNav />
      <section className="p-4">
        <h1>Popular Books</h1>

        <div className="grid grid-cols-5 gap-6 mt-6 gap-y-8">
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
                  className="p-1 border-2 h-[200px] w-full object-cover object-top"
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

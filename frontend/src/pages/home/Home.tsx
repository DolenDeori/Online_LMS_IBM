import { books } from "@/constants";

const Home = () => {
  return (
    <main>
      <section className="h-[60svh] flex flex-col items-center justify-center bg-gray-500">
        <h1 className="text-3xl text-white">Home</h1>
        <p className="text-3xl text-white">Welcome to the home page</p>
      </section>
      <section className="p-4 px-8">
        <h1 className="text-2xl font-semibold text-center">
          Our Book Collection
        </h1>
        <div className="gid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
          {
            // Show book list
            books.map((book) => (
              <div
                key={book.id}
                className="flex items-center justify-between p-4 border-b"
              >
                <div>
                  <h2 className="text-xl font-semibold">{book.title}</h2>
                  <p className="text-lg">{book.author}</p>
                </div>
                <div>
                  <button className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer">
                    Borrow
                  </button>
                </div>
              </div>
            ))
          }
        </div>
      </section>
    </main>
  );
};

export default Home;
